
import Carrusel from "../../components/Carrusel";
import QuienesSomos from "../../components/QuienesSomos/Index";
import ListaServicios from "../../components/Servicios/Index";
import EspecialidadesItems from "../../components/Especialidades/EspecialidadesItems";
import ContactUs from "../../components/ContactUs/ContactUs";
import Entidades from "../../components/Entidades/Entidades";
import Footer from "../../components/Footer/Footer";
import ListaNoticias from "../../components/Noticias/ListaNoticias";
import './styleLanding.css'

function LandingPage() {
  return (
    <>
      <Carrusel />
      <div className="desktop-responsive">
        <QuienesSomos />
        <ListaServicios />
        <EspecialidadesItems />
        <ListaNoticias />
        <ContactUs />
        <Entidades />
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
