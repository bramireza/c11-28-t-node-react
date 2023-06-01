import { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import { Link, useNavigate } from "react-router-dom";
import { getDoctorById, getDoctors } from "./MockDoctors";

function AdminDashboard() {

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getDoctors()
            .then(rta => setDoctors(rta))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
    }
    const seeDetaiils = (e) => {
        e.preventDefault();
        return (
            <DoctorCard></DoctorCard>
        )
    }
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };


    //getDoctorById(1).then(res => console.log(res) ).catch(e => console.log(e))

    const Table = () => {
        return (
            <table className="mx-auto">
                <thead>
                    <tr>
                        <th scope='col'>Foto</th>
                        <th scope='col'>Nombre del profesional</th>
                        <th scope='col'>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => {
                        return (
                            <tr className='fw-normal' key={index}>
                                <th>
                                    <img className='' style={{ height: '100px', width: '120px' }} src={doctor.image} />
                                </th>
                                <td className='align-middle'>
                                    <span className="ms-2">{doctor.name + " " + doctor.lastName}</span>
                                </td>
                                <td className='align-middle'>
                                    <Link to={`/doctor/${doctor.medId}`} className='btn btn-secondary'>Ver más</Link>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        )
    }

    return (
        <section className="container-fluid p-3">
            <h1>Hola Admin</h1>
            <h5 className="col-12 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</h5>
            <div className="row justify-content-center mb-2">
                <button className="btn btn-outline-secondary mt-3 col-8"
                    onClick={() => navigate("/doctor/create")}
                >
                    Agregar perfil profesional
                </button>
            </div>
            <form action="" className="mb-5">
                <label htmlFor="search" className="fst-italic align-self-start"></label>
                <input
                    type="text"
                    className="form-control bg-light border border-secondary rounded text-dark"
                    placeholder="Buscar por profesional o especialidad"
                    name="search"
                    value={searchInput}
                    onChange={handleChange}
                />
            </form>
            <Table></Table>
        </section>
    )
}
export default AdminDashboard;