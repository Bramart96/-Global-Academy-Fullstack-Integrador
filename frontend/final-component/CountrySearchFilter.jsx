import React, { useState, useMemo } from 'react';
import './CountrySearchFilter.css';

/**
 * Componente de filtro de busca de países para OriginDev
 * Permite buscar e filtrar países de América en tiempo real
 */
const CountrySearchFilter = ({ theme = 'dark' }) => {
  // Lista de países de América
  const countries = [
    'Argentina',
    'Brasil',
    'Chile',
    'Colombia',
    'México',
    'Perú',
    'Uruguay',
    'Venezuela',
    'Estados Unidos',
    'Canadá',
    'Costa Rica',
    'Panamá',
    'Ecuador',
    'Bolivia',
    'Paraguay',
    'Guatemala',
    'Honduras',
    'El Salvador',
    'Nicaragua',
    'Cuba',
    'República Dominicana',
    'Puerto Rico'
  ];

  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar países basado en el término de búsqueda
  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) {
      return countries;
    }
    
    return countries.filter(country =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, countries]);

  // Manejar cambios en el input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Limpiar búsqueda
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={`country-search-filter ${theme}`}>
      <div className="search-container">
        {/* Input de búsqueda con ícono de lupa */}
        <div className="search-input-wrapper">
          <svg 
            className="search-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          
          <input
            type="text"
            className="search-input"
            placeholder="Buscar país…"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Buscar países"
          />
          
          {/* Botón para limpiar búsqueda */}
          {searchTerm && (
            <button 
              className="clear-button"
              onClick={clearSearch}
              aria-label="Limpiar búsqueda"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Lista de países filtrados */}
      <div className="countries-container">
        {filteredCountries.length > 0 ? (
          <ul className="countries-list">
            {filteredCountries.map((country, index) => (
              <li 
                key={index} 
                className="country-item"
                onClick={() => console.log(`País seleccionado: ${country}`)}
              >
                {country}
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-results">
            <p>No se encontraron países</p>
          </div>
        )}
      </div>

      {/* Información adicional */}
      <div className="filter-info">
        <span className="results-count">
          {filteredCountries.length} de {countries.length} países
        </span>
      </div>
    </div>
  );
};

export default CountrySearchFilter;

