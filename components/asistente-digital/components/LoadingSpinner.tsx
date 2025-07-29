
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="text-center p-8 w-full">
      <div className="flex justify-center items-center mb-4">
        <SparklesIcon className="w-16 h-16 text-blue-500 animate-pulse" />
      </div>
      <h2 className="text-2xl font-semibold text-slate-700">Analizando tu idea...</h2>
      <p className="text-slate-500 mt-2">Nuestra IA está generando las mejores opciones para ti. ¡Esto tomará solo un momento!</p>
    </div>
  );
};

export default LoadingSpinner;
