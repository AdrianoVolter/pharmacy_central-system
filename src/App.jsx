import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./pages/Inicio"
function App() {



  return (

    <div className="col-12 container-fluid">
      <Header/>
      <Inicio />
      <Outlet />

    
    </div>
     
  )
}

export default App
