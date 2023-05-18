import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import PruebaRutas from "./components/PruebaRutas/PruebaRutas";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* aca se va a poner la ruta al login y el componente de login, el componente pruba es solo para probar */}
          <Route path="/prueba" element={<PruebaRutas />} />
          {/* <PruebaRutas/> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
