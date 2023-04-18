import { createContext } from "react";
//import { useState } from "react";

const MedContext = createContext(
    {
        medicamentos: [],
        setMedicamentos: () => { },
    }
    
   
);


 



export default MedContext;


