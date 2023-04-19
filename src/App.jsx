import { Outlet } from "react-router-dom"
import Header from "./components/Header"
//import { MedProvider } from "./contexts/MedContext"
import { FarmProvider } from "./contexts/FarmContext"

function App() {

  return (
    
    // <MedProvider>
    <FarmProvider>
    <div className="col-12 container-fluid">
      <Header/>
      <Outlet />
    </div>
    </FarmProvider>
    // </MedProvider>
   
  )
}

export default App
