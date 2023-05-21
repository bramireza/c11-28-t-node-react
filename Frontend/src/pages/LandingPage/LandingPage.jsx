import ContactUs from "../../components/ContactUs/ContactUs";
import Entidades from "../../components/Entidades/Entidades";
import Footer from "../../components/Footer/Footer";
import ListaNoticias from "../../components/Noticias/ListaNoticias";

function LandingPage() {
  return (
    <>
      <ListaNoticias/>
      <ContactUs/>
      <Entidades/>
      <Footer/>
    </>
  );
}
export default LandingPage;
