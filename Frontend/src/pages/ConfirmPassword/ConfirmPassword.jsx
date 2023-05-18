import React, { useRef } from 'react';
import { Link } from "react-router-dom";

function ConfirmPassword() {

    const passRef = useRef("");
    const confirmPassRef = useRef("");

    function confirmPass(e) {
        e.preventDefault();
        passRef.current.value;
        confirmPassRef.current.value;
    }

    return (
        <section className='container'>
            <h4 className="my-5 mb-5">Crear nueva contraseña</h4>
            <form onSubmit={confirmPass} className="d-flex flex-column gap-2">
                <label htmlFor="" className="fst-italic align-self-start">
                    Elige tu nueva contraseña
                </label>
                <input
                    type="text"
                    className="bg-light border border-none rounded text-dark p-2 mb-3"
                    placeholder="Escribe tu contraseña"
                    ref={passRef}
                    required
                />

                <label htmlFor="" className="fst-italic align-self-start">
                    Repite tu nueva contraseña
                </label>
                <input
                    type="password"
                    className="bg-light border border-none rounded text-dark p-2"
                    placeholder="Escribe nuevamente tu contraseña"
                    ref={confirmPassRef}
                    required
                />

                <button className="btn btn-primary my-5 mb-1">Guardar</button>
                <Link to="/login" className="btn btn-outline-primary" href="#">
                    Cancelar
                </Link>
            </form>
        </section>
    )
}

export default ConfirmPassword;