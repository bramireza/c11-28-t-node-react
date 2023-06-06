import "./seccion.css";
import { api } from "../../../utilities/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const accessToken = localStorage.getItem("accessToken");
const headers = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

const Seccion = () => {
  const [user, setUser] = useState({});
  const [pastAppointments, setPastAppoinments] = useState([]);
  const [upcomingAppointments, setUpcomingAppoinments] = useState([]);

  //Datos del Paciente
  useEffect(() => {
    api()
      .get("/auth/me", { headers })
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  // Formateador de fechas de citas medicas
  function formatAppoinments(data, setMethod) {
    const formatData = data.map((esp) => {
      const date = new Date(esp.appointmentDate);
      const appointmentDate = date.toLocaleDateString();
      const startTime = date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
      });
      // Sumamos hora inico + duracion cita
      date.setMinutes(date.getMinutes() + esp.duration);
      const endTime = date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
      });
      return {
        ...esp,
        appointmentDate,
        startTime,
        endTime,
      };
    });
    setMethod(formatData);
  }
  // Citas medicas pasadas
  useEffect(() => {
    api()
      .get("/appointment/me/past", { headers })
      .then((res) =>
        formatAppoinments(res.data.appointments, setPastAppoinments)
      )
      .catch((err) => console.log(err));
  }, []);
  // Citas medicas proximas
  useEffect(() => {
    api()
      .get("/appointment/me/upcoming", { headers })
      .then((res) =>
        formatAppoinments(res.data.appointments, setUpcomingAppoinments)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <header className="header d-flex p-3 align-items-center justify-content-start gap-2">
        <img
          src="https://www.freeiconspng.com/thumbs/account-icon/account-profile-icon-1.png"
          className="img_perfil img-fluid rounded-circle"
          alt="perfil"
        />
        <h5 className="col-6 ">Hola, {user.name?.toUpperCase()}.</h5>
      </header>
      <main>
        <section className="p-3">
          <h3>Turnos activos</h3>
          <p>Estas son tus próximas citas confirmadas:</p>
          <div
            className="d-flex flex-row flex-nowrap"
            style={{ overflowX: "auto" }}
          >
            {upcomingAppointments.length != 0
              ? upcomingAppointments.map((apt) => {
                  return (
                    <article
                      className="d-flex p-3 justify-content-between gap-4 bg-body-tertiary shadow"
                      key={apt._id}
                      style={{
                        width: "500px",
                        minWidth: "400px",
                        margin: "0 10px",
                      }}
                    >
                      <img
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7da02324714817.56338d63f2a30.jpg"
                        className="img_turno rounded"
                        alt="logoDoc"
                        style={{ maxWidth: "100%" }}
                      />
                      <div className="datos_turno">
                        <h4 className="py-2">Dr.{apt.doctor.name}</h4>
                        <p>Área: {apt.specialty.name}</p>
                        <p>Día: {apt.appointmentDate}</p>
                        <p>
                          Horario: {apt.startTime} - {apt.endTime}
                        </p>
                      </div>
                    </article>
                  );
                })
              : "Sin turnos pendientes"}
          </div>
        </section>
        <section className="p-3">
          <h3>Turnos pasados</h3>
          {pastAppointments.length != 0
            ? pastAppointments.map((apt) => {
                return (
                  <article
                    className="d-flex p-3 align-items-center justify-content-between gap-4 mb-3 bg-body-tertiary shadow "
                    key={apt._id}
                  >
                    <img
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7da02324714817.56338d63f2a30.jpg"
                      className="img_turno rounded"
                      alt="logoDoc"
                    />
                    <div className="datos_turno">
                      <h4 className="py-2">Dr.{apt.doctor.name}</h4>
                      <p>Área: {apt.specialty.name}</p>
                      <p>Día: {apt.appointmentDate}</p>
                      <p>
                        Horario: {apt.startTime} - {apt.endTime}
                      </p>
                    </div>
                  </article>
                );
              })
            : "Sin turnos "}
        </section>
        <div className="d-flex px-3 pb-3">
          <Link
            to="/turnos-especialidad"
            className="btn btn-success col-12 col-md-6 mx-auto"
          >
            Crear nuevo turno
          </Link>
        </div>
      </main>
    </>
  );
};

export default Seccion;
