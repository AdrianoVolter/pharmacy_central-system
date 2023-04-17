import { Outlet } from "react-router-dom"
import Header from "./components/Header"

import UseContext from "./contexts/UseContext"

//import ContextoProvider from "./context/Contexto"
function App() {



  return (
    
    <UseContext.Provider value={{
      listaMedicamentos: [], setListaMedicamentos: () => {},
      
    }}>
    <div className="col-12 container-fluid">
      <Header/>
     
      <Outlet />

    
    </div>
    </UseContext.Provider>
  )
}

export default App
