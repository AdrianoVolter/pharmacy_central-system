import { Outlet } from "react-router-dom"
import Header from "./components/Header"
//import MedContext  from "./contexts/MedContext" //importar contexto para usar no componente App



function App() {

  return (
   
    <div className="col-12 container-fluid">
      <Header/>
      <Outlet />
    </div>
   
  )
}

export default App
