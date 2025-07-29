
import React, { useState } from 'react';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface IdeaInputFormProps {
  onSubmit: (idea: string) => void;
}

const IdeaInputForm: React.FC<IdeaInputFormProps> = ({ onSubmit }) => {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onSubmit(idea.trim());
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl mx-auto animate-fade-in">
      <form onSubmit={handleSubmit}>
        <label htmlFor="idea-input" className="block text-xl font-semibold text-slate-700 mb-3">
          Cuéntanos tu idea de negocio:
        </label>
        <textarea
          id="idea-input"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Ej: 'Quiero una web de catering', 'Necesito una app para agendar citas de peluquería', 'Quiero un sistema para gestionar inventario de mi tienda'..."
          className="w-full h-40 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 text-lg"
          required
        />
        <div className="mt-6 text-right">
          <button
            type="submit"
            disabled={!idea.trim()}
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all transform hover:scale-105"
          >
            Generar Opciones
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default IdeaInputForm;
