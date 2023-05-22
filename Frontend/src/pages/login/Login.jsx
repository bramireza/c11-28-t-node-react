import { useState } from "react";
import { Link } from "react-router-dom";

import useServices from "../../services/useServices";
import validatePassword from "../../utilities/validatePassword";
import style from "./login.module.css";

const initialValues = {
  personalId: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const { auth } = useServices();

  const validate = () => {
    let errorsList = {};

    if (!state.personalId) errorsList = { ...errorsList, personalId: "Campo obligatorio" };
    else if (state.personalId.length < 8) errorsList = { ...errorsList, personalId: "Debe tener al menos 8 caracteres" };

    const errorPass = validatePassword(state.password);
    if (errorPass) errorsList = { ...errorsList, password: errorPass };

    return errorsList;
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const response = validate();
    if (Object.keys(response).length < 1) {
      const body = {
        personalId: state.personalId,
        password: state.password,
      };
      try {
        const { data } = await auth.login(body);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    setErrors(response);
  };

  return (
    <main className="mx-auto text-center w-75">
      <h1 className="pt-4">Inicio de Sesion</h1>
      <h4 className="mb-5">Ingresar a tu cuenta</h4>

      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            Documento de identidad
          </label>
          <input
            type="text"
            className="bg-light border border-none text-dark p-2 mb-3"
            placeholder="Documento de identidad"
            name="personalId"
            value={state.personalId}
            onChange={handleChange}
          />
          {errors.personalId && <p className={style.errorText}>{errors.personalId}</p>}
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            Contraseña
          </label>
          <input
            type="password"
            className="bg-light border border-none text-dark p-2"
            placeholder="Contraseña"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div>
              {errors.password.map((elem, index) => (
                <p key={index} className={style.errorText}>
                  {elem}
                </p>
              ))}
            </div>
          )}
        </div>

        <Link to="/resetPassword" className="link-underline link-underline-opacity-0 fs-6 align-self-end mb-2">
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
