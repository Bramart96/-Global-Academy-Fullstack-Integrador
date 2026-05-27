import { createContext, useState, useContext, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Cargar carrito y contratos desde localStorage al montar
  useEffect(() => {
    const savedCarrito = localStorage.getItem("carrito");
    const savedContracts = localStorage.getItem("contracts");
    if (savedCarrito) setCarrito(JSON.parse(savedCarrito));
    if (savedContracts) setContracts(JSON.parse(savedContracts));
  }, []);

  // Persistencia automática
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    localStorage.setItem("contracts", JSON.stringify(contracts));
  }, [contracts]);

  const agregar = (nuevoDev) => {
    setCarrito((prev) => {
      const yaExiste = prev.some((dev) => dev.name === nuevoDev.name);
      return yaExiste ? prev : [...prev, nuevoDev];
    });
  };

  const eliminar = (name) => {
    setCarrito((prev) => prev.filter((d) => d.name !== name));
  };

  const limpiar = () => {
    setCarrito([]);
    setContracts([]);
    localStorage.removeItem("carrito");
    localStorage.removeItem("contracts");
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregar,
        eliminar,
        limpiar,
        mostrarCarrito,
        setMostrarCarrito,
        contracts,
        setContracts,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
