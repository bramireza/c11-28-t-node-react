import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="mx-auto text-center w-75">
      <h1 className="pt-4">Inicio de Sesion</h1>
      <h4 className="mb-5">Ingresar a tu cuenta</h4>
      <form action="" className="d-flex flex-column gap-2">
        <label htmlFor="" className="fst-italic align-self-start">
          Documento de identidad
        </label>
        <input
          type="text"
          className="bg-light border border-none text-dark p-2 mb-3"
          placeholder="Documento de identidad"
          required
        />

        <label htmlFor="" className="fst-italic align-self-start">
          Contraseña
        </label>
        <input type="password" className="bg-light border border-none text-dark p-2" placeholder="Contraseña" required />

        <Link to='/resetPassword' href="" className="link-underline link-underline-opacity-0 fs-6 align-self-end mb-2">
          Olvidé mi contraseña
        </Link>
        <button className="btn btn-success my-2 mx-auto w-50">Ingresar</button>
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
