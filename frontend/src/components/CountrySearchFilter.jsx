import React, { useState, useMemo, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const CountrySearchFilter = () => {
  const { darkMode } = useContext(ThemeContext);
  const theme = darkMode ? 'light' : 'dark';

  const countries = [
    'Argentina', 'Brasil', 'Chile', 'Colombia', 'México', 'Perú', 'Uruguay', 'Venezuela',
    'Estados Unidos', 'Canadá', 'Costa Rica', 'Panamá', 'Ecuador', 'Bolivia', 'Paraguay',
    'Guatemala', 'Honduras', 'El Salvador', 'Nicaragua', 'Cuba', 'República Dominicana', 'Puerto Rico'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return countries;
    return countries.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, countries]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={`max-w-md mx-auto p-6 rounded-2xl border transition-all shadow-lg backdrop-blur-md
      ${theme === 'dark'
        ? 'bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] text-white border-[#333]'
        : 'bg-gradient-to-br from-white to-gray-100 text-gray-900 border-gray-300'
      }`}
    >
      <div className="mb-5">
        <div className="relative flex items-center">
          <svg
            className={`absolute left-4 w-5 h-5 
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
            fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            type="text"
            placeholder="Buscar país…"
            value={searchTerm}
            onChange={handleSearchChange}
            className={`w-full pl-12 pr-10 py-4 rounded-xl border outline-none text-sm font-medium
              transition-all focus:scale-[1.02] placeholder:text-sm
              ${theme === 'dark'
                ? 'bg-white/5 text-white border-[#333] placeholder:text-gray-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20'
                : 'bg-black/5 text-gray-900 border-gray-300 placeholder:text-gray-500 focus:border-purple-800 focus:ring-2 focus:ring-purple-800/10'
              }`}
            aria-label="Buscar países"
          />

          {searchTerm && (
            <button
              onClick={clearSearch}
              className={`absolute right-4 p-1.5 rounded-full transition-opacity hover:scale-110 
                ${theme === 'dark'
                  ? 'text-gray-400 hover:bg-white/10 hover:text-white'
                  : 'text-gray-500 hover:bg-black/10 hover:text-black'
                }`}
              aria-label="Limpiar búsqueda"
            >
              <svg
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className={`min-h-[200px] max-h-[300px] overflow-y-auto rounded-xl border p-2
        scrollbar-thin scrollbar-thumb-rounded-md transition
        ${theme === 'dark'
          ? 'bg-white/5 border-[#333] scrollbar-thumb-violet-400 scrollbar-track-[#1a1a1a]'
          : 'bg-black/5 border-gray-300 scrollbar-thumb-purple-800 scrollbar-track-gray-200'
        }`}
      >
        {filteredCountries.length > 0 ? (
          <ul className="space-y-1 transition-all">
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => console.log(`País seleccionado: ${country}`)}
                className={`cursor-pointer rounded-lg px-4 py-3 font-medium transition-all border border-transparent
                  hover:translate-x-1 hover:shadow-md
                  ${theme === 'dark'
                    ? 'hover:bg-gradient-to-r from-lime-300/10 to-lime-300/5 hover:border-lime-300 hover:text-lime-300'
                    : 'hover:bg-gradient-to-r from-green-700/10 to-green-700/5 hover:border-green-700 hover:text-green-700'
                  }`}
              >
                {country}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-10 opacity-70 animate-fadeIn">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} font-medium`}>
              No se encontraron países
            </p>
          </div>
        )}
      </div>

      <div className={`text-center pt-4 mt-4 border-t text-sm font-medium opacity-80
        ${theme === 'dark' ? 'border-[#333] text-gray-400' : 'border-gray-300 text-gray-600'}`}>
        {filteredCountries.length} de {countries.length} países
      </div>
    </div>
  );
};

export default CountrySearchFilter;

