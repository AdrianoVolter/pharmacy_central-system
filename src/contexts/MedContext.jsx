import { createContext, useEffect } from "react";
import { useState } from "react";

const MedContext = createContext({});

const MedProvider = ({ children }) => {
  const [listaMedicamentos, setListaMedicamentos] = useState(() => {
    const localSalvo = localStorage.getItem("listaMedicamentos");
    return localSalvo ? JSON.parse(localSalvo) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "listaMedicamentos",
      JSON.stringify(listaMedicamentos)
    );
  }, [listaMedicamentos]);

  const addMedicamento = (medicamento) => {
    setListaMedicamentos([...listaMedicamentos, medicamento]);
  };

  return (
    <MedContext.Provider value={{ listaMedicamentos, addMedicamento }}>
      {children}
    </MedContext.Provider>
  );
};

export { MedContext, MedProvider };
