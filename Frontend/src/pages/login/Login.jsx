

const Login = ()=> {
    return (
      <main>
        <h1>Inicio de Sesion</h1>
        <h4 className="mb-5">Ingresa a tu cuenta</h4>
        <form action="" className="d-flex flex-column gap-2">
            <label htmlFor="" className="fst-normal align-self-start">Documento de identidad / Pasaporte</label>
            <input type="email" className="bg-light border border-none text-dark p-2" placeholder="Documento de identidad / Pasaporte" required/>

            <label htmlFor="" className="fst-normal align-self-start">Contraseña</label>
            <input type="password" className="bg-light border border-none text-dark p-2" placeholder="Contraseña" required/>

            <a href="#" className="link-underline link-underline-opacity-0 fs-6 align-self-end mb-5">Olvidé mi contraseña</a>
            <button className="btn btn-primary my-3">Ingresar</button>
            <a href="#" className="link-underline link-underline-opacity-0 my-3">¿ No tienes cuenta ?</a>
            <button className="btn btn-outline-primary">Registrarse</button>
        </form>
      </main>
    );
  }
  export default Login;
  