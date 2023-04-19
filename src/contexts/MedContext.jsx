import { createContext } from "react";
import { useState } from "react";

const MedContext = createContext({});


const MedProvider = ({ children }) => {
    const [listaMedicamentos, setListaMedicamentos] = useState([]);

    const addMedicamento = (medicamento) => {
        setListaMedicamentos([...listaMedicamentos, medicamento]);
    }

    return (
        <MedContext.Provider value={{ listaMedicamentos, addMedicamento }}>
            {children}
        </MedContext.Provider>
    )
}

export { MedContext, MedProvider };






