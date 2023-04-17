import { Outlet } from "react-router-dom"
import Header from "./components/Header"
//import ContextoProvider from "./context/Contexto"
function App() {



  return (
    

    <div className="col-12 container-fluid">
      <Header/>
     
      <Outlet />

    
    </div>
   
  )
}

export default App
