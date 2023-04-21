import { createContext } from "react";
import { useState } from "react";


//pegar do localstorage e exibir na tela por contexto abaixo 
const FarmContext = createContext({});

const FarmProvider = ({ children }) => { // aqui eu estou criando um contexto para armazenar as farmacias
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





















    //const [listaFarmacias, setListaFarmacias] = useState([]);

    //     const addFarmacia = (farmacia) => {
    //         setListaFarmacias([...listaFarmacias, farmacia]);
    //     }
    
    //     return (
    //         <FarmContext.Provider value={{ listaFarmacias, addFarmacia }}>
    //             {children}
    //         </FarmContext.Provider>
    //     )
    // }
    
    // export { FarmContext, FarmProvider };