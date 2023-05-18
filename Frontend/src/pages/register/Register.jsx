const Register = () => {
    return (
        <main className="container" style={{ margin: "100px 0 20px 0" }}>
            <h1>Crear nueva cuenta</h1>
            <p className="mb-5">Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form action="" className="d-flex flex-column gap-2 align-self-start text-start">
                <label htmlFor="" className="fst-italic align-self-start">
                    Nombre/s
                </label>
                <input
                    type="text"
                    className="form-control bg-light border border-none text-dark p-2"
                    placeholder="Nombre/s"
                    required
                />

                <label htmlFor="" className="fst-italic align-self-start">
                    Apellido/s
                </label>
                <input
                    type="text"
                    className="form-control bg-light border border-none text-dark p-2"
                    placeholder="Apellido/s"
                    required
                />

                <label htmlFor="" className="fst-italic align-self-start">
                    DNI / Pasaporte
                </label>
                <input
                    type="text"
                    className="form-control bg-light border border-none text-dark p-2"
                    placeholder="DNI / Pasaporte"
                    required
                />

                <div className="row">
                    <div className="col-md-6 col-6">
                        <label htmlFor="" className="fst-italic align-self-start">
                            Fecha de Nacimiento
                        </label>
                        <input
                            type="date"
                            className="form-control bg-light border border-none text-dark p-2"
                            placeholder="Fecha de Nacimiento"
                            required
                        />
                    </div>

                    <div className="col-md-6 col-6">
                        <label htmlFor="" className="fst-italic align-self-start">
                            Nacionalidad
                        </label>
                        <input
                            type="text"
                            className="form-control bg-light border border-none text-dark p-2"
                            placeholder="Nacionalidad"
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-6">
                        <label htmlFor="" className="fst-italic align-self-start">
                            Sexo
                        </label>
                        <select
                            className="form-select bg-light border border-none text-dark p-2"
                            required
                        >
                            <option value="">Seleccionar sexo</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                        </select>
                    </div>

                    <div className="col-md-6 col-6">
                        <label htmlFor="" className="fst-italic align-self-start">
                            Número de teléfono
                        </label>
                        <input
                            type="tel"
                            className="form-control bg-light border border-none text-dark p-2"
                            placeholder="Número de teléfono"
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-6">
                        <label htmlFor="" className="fst-italic align-self-start">
                            Dirección
                        </label>
                        <input
                            type="text"
                            className="form-control bg-light border border-none text-dark p-2"
                            placeholder="Dirección"
                            required
                        />
                    </div>

                    <div className="col-md-6 col-6">
                        <label htmlFor="" className="fst-italic align-self-start">
                            CP
                        </label>
                        <input
                            type="text"
                            className="form-control bg-light border border-none text-dark p-2"
                            placeholder="CP"
                            required
                        />
                    </div>
                </div>

                <label htmlFor="" className="fst-italic align-self-start">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control bg-light border border-none text-dark p-2"
                    placeholder="Email"
                    required
                />

                <label htmlFor="" className="fst-italic align-self-start">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="form-control bg-light border border-none text-dark p-2"
                    placeholder="Contraseña"
                    required
                />

                <label htmlFor="" className="fst-italic align-self-start">
                    Repetir contraseña
                </label>
                <input
                    type="password"
                    className="form-control bg-light border border-none text-dark p-2"
                    placeholder="Repetir contraseña"
                    required
                />

                <label style={{ marginTop: "15px" }} className="bg-white">
                    <input type="checkbox" className="form-check-input" />
                    Acepto los términos y condiciones
                </label>

                <label className="bg-white">
                    <input type="checkbox" className="form-check-input" />
                    Acepto recibir notificaciones vía mail (opcional)
                </label>

                <div className="border p-3 d-flex align-items-center">
                    <label className="m-0">
                        <input type="checkbox" className="form-check-input" />
                        No soy un robot
                    </label>
                </div>

                <button
                    className="btn btn-primary my-3 bg-dark border-0"
                    style={{ transition: "background-color 0.2s", backgroundColor: "#000" }}
                >
                    Enviar
                </button>
            </form>
        </main>
    );
};

export default Register;
