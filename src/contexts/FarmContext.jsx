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









// const MedProvider = ({ children }) => {
//     const [listaMedicamentos, setListaMedicamentos] = useState([]);

//     const addMedicamento = (medicamento) => {
//         setListaMedicamentos([...listaMedicamentos, medicamento]);
//     }

//     return (
//         <MedContext.Provider value={{ listaMedicamentos, addMedicamento }}>
//             {children}
//         </MedContext.Provider>
//     )
// }

// export { MedContext, MedProvider };
