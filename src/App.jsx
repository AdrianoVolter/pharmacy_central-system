import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { MedProvider } from "./contexts/MedContext"

function App() {

  return (
   
    <MedProvider>

    <div className="col-12 container-fluid">
      <Header/>
      <Outlet />
    </div>
    </MedProvider>
  
  )
}

export default App
