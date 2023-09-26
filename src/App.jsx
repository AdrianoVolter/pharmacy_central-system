import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { MedProvider } from "./contexts/MedContext";
import { FarmProvider } from "./contexts/FarmContext";

function App() {
  return (
    <div className="App">
      <FarmProvider>
        <MedProvider>
          <Header />
          <Outlet />
        </MedProvider>
      </FarmProvider>
    </div>
  );
}

export default App;
