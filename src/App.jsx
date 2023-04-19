import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { MedProvider } from "./contexts/MedContext"
import { FarmProvider } from "./contexts/FarmContext"

function App() {

  return (
    <FarmProvider>
    <MedProvider>

    <div className="col-12 container-fluid">
      <Header/>
      <Outlet />
    </div>
    </MedProvider>
    </FarmProvider>
  )
}

export default App
