
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-full py-3 px-6">
        <SparklesIcon className="w-8 h-8 text-blue-500" />
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Tu Asistente de Soluciones Digitales
        </h1>
      </div>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Transforma tu visión en un plan de acción. Describe tu idea y te mostraremos el camino.
      </p>
    </header>
  );
};

export default Header;
