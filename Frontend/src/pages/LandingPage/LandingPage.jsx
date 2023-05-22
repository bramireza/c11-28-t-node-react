
import Carrusel from "../../components/Carrusel";
import QuienesSomos from "../../components/QuienesSomos/Index";
import ListaServicios from "../../components/Servicios/Index";
import EspecialidadesItems from "../../components/Especialidades/EspecialidadesItems";
import ContactUs from "../../components/ContactUs/ContactUs";
import Entidades from "../../components/Entidades/Entidades";
import Footer from "../../components/Footer/Footer";
import ListaNoticias from "../../components/Noticias/ListaNoticias";

function LandingPage() {
  return (
    <>

      <Carrusel />
      <QuienesSomos />
      <ListaServicios />
      <EspecialidadesItems /> 
      <ListaNoticias/>
      <ContactUs/>
      <Entidades/>
      <Footer/>
       
    </>
  );
}
export default LandingPage;
