import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
//import PruebaRutas from "./components/PruebaRutas/PruebaRutas";
import LandingPage from "./pages/LandingPage/LandingPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ConfirmPassword from "./pages/ConfirmPassword/ConfirmPassword";
import Registro from "./pages/register/Register";
import Login from "./pages/login/Login";
import TurnoOnLine from "./pages/FlujoPaciente/TurnoOnLine";
import Seccion from "./pages/FlujoPaciente/Seccion/Seccion";
import TurnoEspecialidad from "./pages/Turnos/TurnoEspecialidad/TurnoEspecialidad";
import FechaTurno from "./pages/Turnos/FechaTurno/FechaTurno";


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
          <Route path="/turno" element={<TurnoOnLine />} />
          <Route path="/seccion" element={<Seccion />} />
          {/* aca se va a poner la ruta al login y el componente de login, el componente pruba es solo para probar */}
          <Route path="/turnos-especialidad" element={<TurnoEspecialidad/>} />

          <Route path="/fecha-turno/:medName" element={<FechaTurno/>}/>

          {/* <PruebaRutas/> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
