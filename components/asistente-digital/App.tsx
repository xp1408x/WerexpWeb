
import React, { useState, useCallback } from 'react';
import { AppState, SolutionOption } from '../asistente-digital/types';
import { generateSolutions } from '../asistente-digital/services/geminiService';
import IdeaInputForm from '../asistente-digital/components/IdeaInputForm';
import SolutionOptionsList from '../asistente-digital/components/SolutionOptionsList';
import DetailsForm from '../asistente-digital/components/DetailsForm';
import ConfirmationScreen from '../asistente-digital/components/ConfirmationScreen';
import LoadingSpinner from '../asistente-digital/components/LoadingSpinner';

function AsistenteDigitalApp() {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [userIdea, setUserIdea] = useState<string>('');
  const [solutionOptions, setSolutionOptions] = useState<SolutionOption[]>([]);
  const [selectedOption, setSelectedOption] = useState<SolutionOption | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIdeaSubmit = useCallback(async (idea: string) => {
    setUserIdea(idea);
    setAppState(AppState.LOADING);
    setError(null);
    try {
      const options = await generateSolutions(idea);
      if (options.length === 0) {
        throw new Error("No se recibieron opciones válidas.");
      }
      setSolutionOptions(options);
      setAppState(AppState.OPTIONS_RESULT);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error desconocido.");
      setAppState(AppState.ERROR);
    }
  }, []);

  const handleOptionSelect = useCallback((option: SolutionOption) => {
    setSelectedOption(option);
    setAppState(AppState.DETAILS_INPUT);
  }, []);
  
  const handleDetailsSubmit = useCallback(async (details: string, email: string) => {
    setAppState(AppState.LOADING); // Mostrar spinner mientras se envía
    setError(null);

    const formData = {
      email: email,
      idea: userIdea,
      solucion_titulo: selectedOption?.title || 'No seleccionada',
      solucion: selectedOption?.description || 'No disponible',
      detalles: details,
    };

    try {
      const response = await fetch('https://formspree.io/f/xvgveejr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAppState(AppState.CONFIRMATION);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el formulario a Formspree.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocurrió un error desconocido al enviar el formulario.");
      setAppState(AppState.ERROR); // Mostrar pantalla de error
    }
  }, [userIdea, selectedOption]);

  const handleReset = useCallback(() => {
    setAppState(AppState.IDLE);
    setUserIdea('');
    setSolutionOptions([]);
    setSelectedOption(null);
    setError(null);
  }, []);

  const renderContent = () => {
    switch (appState) {
      case AppState.IDLE:
        return <IdeaInputForm onSubmit={handleIdeaSubmit} />;
      case AppState.LOADING:
        return <LoadingSpinner />;
      case AppState.OPTIONS_RESULT:
        return <SolutionOptionsList options={solutionOptions} onSelect={handleOptionSelect} userIdea={userIdea} />;
      case AppState.DETAILS_INPUT:
        if (selectedOption) {
          return <DetailsForm selectedOption={selectedOption} onSubmit={handleDetailsSubmit} />;
        }
        return null;
      case AppState.CONFIRMATION:
        return <ConfirmationScreen onReset={handleReset} />;
      case AppState.ERROR:
        return (
          <div className="text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">¡Ups! Algo salió mal</h2>
            <p className="mb-6">{error}</p>
            <button
              onClick={handleReset}
              className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
            >
              Intentar de Nuevo
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
}

export default AsistenteDigitalApp;
