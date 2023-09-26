import { createContext } from "react";
import { useState, useEffect } from "react";

const FarmContext = createContext({});

const FarmProvider = ({ children }) => {
  const [listaFarmacias, setListaFarmacias] = useState(() => {
    const localSalvo = localStorage.getItem("listaFarmacias");
    return localSalvo ? JSON.parse(localSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem("listaFarmacias", JSON.stringify(listaFarmacias));
  }, [listaFarmacias]);

  const addFarmacia = (farmacia) => {
    setListaFarmacias([...listaFarmacias, farmacia]);
  };

  return (
    <FarmContext.Provider value={{ listaFarmacias, addFarmacia }}>
      {children}
    </FarmContext.Provider>
  );
};

export { FarmContext, FarmProvider };
