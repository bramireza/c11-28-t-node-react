import Carrusel from "../../components/Carrusel";
import QuienesSomos from "../../components/QuienesSomos/Index";
import TituloServicio from "../../components/Servicios/TituloServicios";
import Servicios from "../../components/Servicios/Index";
import TituloEspecialidades from "../../components/Especialidades/TituloEspecialidades";

function LandingPage() {
  return (
    <>
      <Carrusel />
      <QuienesSomos />
      <TituloServicio titulo='Servicios' />
      <Servicios servicio='Servicio 1' /> 
      <Servicios servicio='Servicio 2'/> 
      <Servicios servicio='Servicio 3'/>
      <TituloEspecialidades titulo='Especialidades' /> 
    </>
  );
}
export default LandingPage;
