import { Link } from "react-router-dom";
import InputText from "../../components/inputText";
import InputPassword from "../../components/InputPassword/Index";
import Boton from "../../components/Boton/Boton";

const Login = () => {
  return (
    <main className="mx-auto text-center w-75">
      <h1 className="pt-4">Inicio de Sesion</h1>
      <h4 className="mb-5">Ingresar a tu cuenta</h4>
      <form action="" className="d-flex flex-column gap-2">
        <InputText 
          titulo='Documento de identidad'
          placeholder='Documento de identidad'
          required={true}
        />

        <InputPassword 
          titulo='Contraseña' 
          placeholder='Contraseña' 
          required={true} />

        <Link to='/resetPassword' href="" className="link-underline link-underline-opacity-0 fs-6 align-self-end mb-2">
          Olvidé mi contraseña
        </Link>
        <Boton titulo='Ingresar' />
        <p href="#" className="mt-2">
          ¿ No tienes cuenta ?
        </p>

        <Link to="/registro" className="btn btn-outline-primary mx-auto w-50" href="#">
          Registrarse
        </Link>
      </form>
    </main>
  );
};
export default Login;
