import { createContext } from "react";
import { useState } from "react";

const FarmContext = createContext({});

const FarmProvider = ({ children }) => {
    const [listaFarmacias, setListaFarmacias] = useState([]);

    const addFarmacia = (farmacia) => {
        setListaFarmacias([...listaFarmacias, farmacia]);
    }

    return (
        <FarmContext.Provider value={{ listaFarmacias, addFarmacia }}>
            {children}
        </FarmContext.Provider>
    )
}

export { FarmContext, FarmProvider };