
import React from 'react';
import { SolutionOption } from '../types';
import SolutionCard from './SolutionCard';

interface SolutionOptionsListProps {
  options: SolutionOption[];
  onSelect: (option: SolutionOption) => void;
  userIdea: string;
}

const SolutionOptionsList: React.FC<SolutionOptionsListProps> = ({ options, onSelect, userIdea }) => {
  return (
    <div className="w-full animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Opciones para tu idea:</h2>
        <p className="text-lg text-blue-600 font-medium mt-1">"{userIdea}"</p>
        <p className="mt-4 text-slate-600">Hemos generado las siguientes propuestas para ti. Elige la que mejor se adapte a tu visión inicial.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {options.map((option, index) => (
          <SolutionCard key={index} option={option} onSelect={() => onSelect(option)} />
        ))}
      </div>
    </div>
  );
};

export default SolutionOptionsList;
