
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

interface ConfirmationScreenProps {
  onReset: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ onReset }) => {
  return (
    <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg text-center w-full max-w-2xl mx-auto animate-fade-in">
      <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
      <h4 className="text-3xl font-bold text-slate-800 mb-4">¡Solicitud Enviada!</h4>
      <p className="text-lg text-slate-600 mb-8">
        Gracias por compartir tu visión con nosotros. Hemos recibido tus detalles y nuestro equipo se pondrá en contacto contigo muy pronto para agendar una reunión y dar los siguientes pasos.
      </p>
      <button
        onClick={onReset}
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Comenzar de Nuevo
      </button>
    </div>
  );
};

export default ConfirmationScreen;
