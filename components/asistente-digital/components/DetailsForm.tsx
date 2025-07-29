
import React, { useState } from 'react';
import { SolutionOption } from '../types';

interface DetailsFormProps {
  selectedOption: SolutionOption;
  onSubmit: (details: string, email: string) => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({ selectedOption, onSubmit }) => {
  const [details, setDetails] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(email.trim()){
        onSubmit(details, email);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Casi hemos terminado</h2>
      <p className="text-slate-600 mb-6">Completa el último paso. Déjanos tu correo electrónico para contactarte y, si quieres, añade cualquier detalle adicional a tu solicitud.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-100 p-6 rounded-lg border border-slate-200">
          <h3 className="text-lg font-bold text-blue-700 mb-2">Tu opción seleccionada:</h3>
          <h4 className="text-xl font-semibold text-slate-800 mb-3">{selectedOption.title}</h4>
          <p className="text-slate-600">{selectedOption.description}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email-input" className="block text-lg font-semibold text-slate-700 mb-3">
              Tu correo electrónico:
            </label>
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@ejemplo.com"
              className="w-full p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 text-base"
              required
            />
            <p className="text-sm text-slate-500 mt-2">Es fundamental para poder enviarte la propuesta.</p>
          </div>
          <div>
            <label htmlFor="details-input" className="block text-lg font-semibold text-slate-700 mb-3">
              Añade detalles o personalizaciones (opcional):
            </label>
            <textarea
              id="details-input"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ej: 'Quiero que la pasarela de pagos acepte Visa y MasterCard...'"
              className="w-full h-40 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow duration-200 text-base"
            />
          </div>
          <div className="mt-6 text-right">
            <button
              type="submit"
              disabled={!email.trim()}
              className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
