import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import PruebaRutas from "./components/PruebaRutas/PruebaRutas";
import LandingPage from "./pages/LandingPage/LandingPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ConfirmPassword from "./pages/ConfirmPassword/ConfirmPassword";
import Registro from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          {/* aca se va a poner la ruta al login y el componente de login, el componente pruba es solo para probar */}
          <Route path="/prueba" element={<PruebaRutas />} />
          {/* <PruebaRutas/> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
