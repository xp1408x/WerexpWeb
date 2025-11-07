
import React from 'react';
import { SolutionOption } from '../types';
import { ArrowRightIcon } from './icons/ArrowRightIcon';

interface SolutionCardProps {
  option: SolutionOption;
  onSelect: () => void;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ option, onSelect }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-transparent hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col">
      <h5 className="text-xl font-bold text-slate-800 mb-3">{option.title}</h5>
      <p className="text-slate-600 flex-grow mb-6">{option.description}</p>
      <button
        onClick={onSelect}
        className="mt-auto self-start inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors"
      >
        Seleccionar esta opción
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SolutionCard;
