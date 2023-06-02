import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendario.css";
import ConfirmarTurnos from "../ConfirmarCita/ConfirmarCita";
import { api } from "../../../utilities/axios";
import { useCartContext } from "../Contexto/Contexto";

const Calendario = ({ agenda, medId }) => {
    const { especialidad } = useCartContext();
    console.log(especialidad)
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState("");

    const [medicoName, setMedicoName] = useState("");
    const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
    const [appointment, setAppointment] = useState({})
    const minDate = new Date(
        fechaSeleccionada.getFullYear(),
        fechaSeleccionada.getMonth(),
        1
    );
    const maxDate = new Date(
        fechaSeleccionada.getFullYear(),
        fechaSeleccionada.getMonth() + 1,
        0
    );

    const diasDisponiblesEnAgenda = agenda
        .filter((day) => day.availableAppointmentSlots !== 0)
        .map((day) => day.day);

    const diaNoDisponibleEnAgenda = agenda
        .filter((day) => day.availableAppointmentSlots === 0)
        .map((day) => day.day);

    useEffect(() => {
        api()
            .get("/auth/me")
            .then((response) => {
                setUserId(response.data.user._id);
            })
            .catch((error) => {
                console.log(error);
            });
        api()
            .get("/doctor/" + medId)
            .then((response) => {
                setMedicoName(response.data.doctor.name);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [fechaSeleccionada]);

    const crearCita = (date) => {
        if (userId) {
            const data = {
                doctor: medId,
                patient: userId,
                appointmentDate: date,
                specialty: especialidad,

            };
            api()
                .post("/appointment", data)
                .then((response) => {
                    const date = new Date(response.data.appointment.appointmentDate);
                    setFormattedDate(date.toLocaleDateString("es-AR", options));
                    console.log(response.data.appointment)
                    setAppointment(response.data.appointment)

                })
                .finally(setLoading(false))
                .catch((error) => {
                    console.log(error);
                });

        }
    };

    const handleFechaChange = (date) => {
        setFechaSeleccionada(date);
        console.log(fechaSeleccionada);
    };

    const agregarClaseCSS = ({ date, view }) => {
        if (view === "month") {
            const month = date.getMonth();
            const diaActual = date.getDate();

            if (diasDisponiblesEnAgenda.includes(diaActual)) {
                return "availableDays";
            }
            if (
                month === new Date().getMonth() &&
                diaNoDisponibleEnAgenda.includes(diaActual)
            ) {
                return "unAvailableDays";
            }
        }
    };

    const deshabilitarDias = ({ date, view }) => {
        const diaActual = date.getDate();
        return view === "month" && !diasDisponiblesEnAgenda.includes(diaActual);
    };

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: "America/Argentina/Buenos_Aires", // Cambia esto a la zona horaria que necesites
    };

    return (
        <div className="almanaque">
            {loading ? (
                <Calendar
                    value={fechaSeleccionada}
                    onChange={handleFechaChange}
                    tileClassName={agregarClaseCSS}
                    tileDisabled={deshabilitarDias}
                    minDate={minDate}
                    maxDate={maxDate}
                    onClickDay={crearCita}
                />
            ) : (
                ""
            )}
            {/* {loading ? (
                ""
            ) : (
                <ConfirmarTurnos
                    // formattedDate={formattedDate}
                    // medId={medId}
                    // medicoName={medicoName}
                    appointment={appointment}
                />
            )} */}

            {appointment ? (
                <ConfirmarTurnos
                    // formattedDate={formattedDate}
                    // medId={medId}
                    // medicoName={medicoName}
                    appointment={appointment}
                />
            ): (
                ""
            )  }


        </div>
    );
};

export default Calendario;
