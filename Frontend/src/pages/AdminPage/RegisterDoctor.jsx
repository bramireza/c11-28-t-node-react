import React, { useState } from 'react';
import style from "../register/register.module.css";

const defaultValues = {
  personalId: "",
  name: "",
  lastName: "",
  matricula: "",
  especialidad: "",
  email: "",
  phoneNumber: "",
  birthDay: "",
  gender: "",
  address: "",
  nationality: "",
  cp: "",
  turno: ["Maniana", "tarde"],
  days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
};

function RegisterDoctor() {

  const [state, setState] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
  };

  return (
    <main className="container mx-auto p-4">
      <h1>Agregar perfil profesional</h1>
      <p className="mb-5">Forem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <h4>Datos personales</h4>
      <form action="" onSubmit={handleSubmit} className="d-flex flex-column gap-2 align-self-start text-start">
        <div>
          <input
             accept="image/*" 
             type="file"
          />
          <label htmlFor="" className="fst-italic align-self-start">
            Nombre/s
          </label>
          <input
            type="text"
            className="form-control bg-light border border-none text-dark p-2"
            placeholder="Nombre/s"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          {errors.name && <p className={style.errorText}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            Apellido/s
          </label>
          <input
            type="text"
            className="form-control bg-light border border-none text-dark p-2"
            placeholder="Apellido/s"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className={style.errorText}>{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            DNI
          </label>
          <input
            type="text"
            className="form-control bg-light border border-none text-dark p-2"
            placeholder="Documento de identidad"
            name="personalId"
            value={state.personalId}
            onChange={handleChange}
          />
          {errors.personalId && <p className={style.errorText}>{errors.personalId}</p>}
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            N. de matrícula
          </label>
          <input
            type="text"
            className="form-control bg-light border border-none text-dark p-2"
            placeholder="Número de matrícula"
            name="personalId"
            value={state.matricula}
            onChange={handleChange}
          />
          {errors.matricula && <p className={style.errorText}>{errors.matricula}</p>}
        </div>


        <div >
          <label htmlFor="" className="fst-italic align-self-start">
            Especialidad
          </label>
          <select
            className="form-select bg-light border border-none text-dark p-2"
            name="gender"
            value={state.especialidad}
            onChange={handleChange}
          >
            <option value="">Seleccionar especialidad</option>
            <option value="male">Clínica</option>
            <option value="female">Cardiología</option>
          </select>
          {errors.especialidad && <p className={style.errorText}>{errors.especialidad}</p>}
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            DNI
          </label>
          <input
            type="text"
            className="form-control bg-light border border-none text-dark p-2"
            placeholder="Documento de identidad"
            name="personalId"
            value={state.personalId}
            onChange={handleChange}
          />
          {errors.personalId && <p className={style.errorText}>{errors.personalId}</p>}
        </div>

        <div className="row">
          <div className="col-md-6 col-6">
            <label htmlFor="" className="fst-italic align-self-start">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              className="form-control bg-light border border-none text-dark p-2"
              placeholder="Fecha de Nacimiento"
              name="birthDay"
              value={state.birthDay}
              onChange={handleChange}
            />
            {errors.birthday && <p className={style.errorText}>{errors.birthday}</p>}
          </div>

          <div className="col-md-6 col-6">
            <label htmlFor="" className="fst-italic align-self-start">
              Nacionalidad
            </label>
            <input
              type="text"
              className="form-control bg-light border border-none text-dark p-2"
              placeholder="Nacionalidad"
              name="nationality"
              value={state.nationality}
              onChange={handleChange}
            />
            {errors.nationality && <p className={style.errorText}>{errors.nationality}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-6">
            <label htmlFor="" className="fst-italic align-self-start">
              Sexo
            </label>
            <select
              className="form-select bg-light border border-none text-dark p-2"
              name="gender"
              value={state.gender}
              onChange={handleChange}
            >
              <option value="">Seleccionar sexo</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>
            {errors.gender && <p className={style.errorText}>{errors.gender}</p>}
          </div>

          <div className="col-md-6 col-6">
            <label htmlFor="" className="fst-italic align-self-start">
              Número de teléfono
            </label>
            <input
              type="tel"
              className="form-control bg-light border border-none text-dark p-2"
              placeholder="Número de teléfono"
              name="phoneNumber"
              value={state.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p className={style.errorText}>{errors.phoneNumber}</p>}
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
              name="address"
              value={state.address}
              onChange={handleChange}
            />
            {errors.address && <p className={style.errorText}>{errors.address}</p>}
          </div>

          <div className="col-md-6 col-6">
            <label htmlFor="" className="fst-italic align-self-start">
              CP
            </label>
            <input
              type="text"
              className="form-control bg-light border border-none text-dark p-2"
              placeholder="CP"
              name="cp"
              value={state.cp}
              onChange={handleChange}
            />
            {errors.cp && <p className={style.errorText}>{errors.cp}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            Email
          </label>
          <input
            type="email"
            className="form-control bg-light border border-none text-dark p-2"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          {errors.email && <p className={style.errorText}>{errors.email}</p>}
        </div>

        <h4>Horarios</h4>

        <div >
          <label htmlFor="" className="fst-italic align-self-start">
            Turno
          </label>
          <select
            className="form-select bg-light border border-none text-dark p-2"
            name="turno"
            value={state.turno}
            onChange={handleChange}
          >
            <option value="">Seleccionar turno</option>
            <option value={state.turno[0]}>Mañana</option>
            <option value={state.turno[1]}>Tarde</option>
          </select>
          {errors.turno && <p className={style.errorText}>{errors.turno}</p>}
        </div>

        <div>
          <label htmlFor="" className="fst-italic align-self-start">
            Días disponibles
          </label><br />
          <input type="checkbox" id="lunes" name="lunes" value={state.days[0]} />
          <label htmlFor="lunes"> Lunes</label><br />
          <input type="checkbox" id="martes" name="martes" value={state.days[1]} />
          <label htmlFor="martes"> Martes</label><br />
          <input type="checkbox" id="miercoles" name="miercoles" value={state.days[2]} />
          <label htmlFor="miercoles"> Miércoles</label><br />
          <input type="checkbox" id="Jueves" name="Jueves" value={state.days[3]} />
          <label htmlFor="Jueves"> Jueves</label><br />
          <input type="checkbox" id="viernes" name="viernes" value={state.days[4]} />
          <label htmlFor="viernes"> Viernes</label><br />
          <input type="checkbox" id="sabado" name="sabado" value={state.days[5]} />
          <label htmlFor="sabado"> Sábado</label><br />
          {errors.days && <p className={style.errorText}>{errors.days}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-primary my-3 bg-dark w-50 mx-auto border-0"
          style={{ transition: "background-color 0.2s", backgroundColor: "#000" }}
        >
          Guardar
        </button>
      </form>
    </main>
  );
}

export default RegisterDoctor;