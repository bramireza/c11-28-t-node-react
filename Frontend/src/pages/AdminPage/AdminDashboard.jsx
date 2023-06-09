import { useState, useEffect } from "react";
// import DoctorCard from "./DoctorCard";
import { Link, useNavigate } from "react-router-dom";
// import { getDoctorById, getDoctors } from "./MockDoctors";
import { api } from "../../utilities/axios";

function AdminDashboard() {
  


    const [doctors, setDoctors] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
   
    api()
      .get("/doctor")
      .then((res) => {
        setDoctors(res.data.doctors);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  //getDoctorById(1).then(res => console.log(res) ).catch(e => console.log(e))

  const Table = () => {
    return (
      <table className="mx-auto border" style={{ width: "340px" }}>
        <thead>
          <tr>
            <th scope="col">Foto</th>
            <th scope="col">Nombre del profesional</th>
            <th scope="col">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => {
            return (
              <tr className="fw-normal border" key={index}>
                <th>
                  <img
                    className="rounded"
                    style={{ height: "55px", width: "50px" }}
                    src={
                      doctor.gender == "male"
                        ? "https://img.freepik.com/foto-gratis/doctor-brazos-cruzados-sobre-fondo-blanco_1368-5790.jpg?w=2000"
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VcNrlLvabf6_8efcKV4W_oNFJWuX8U9tbg&usqp=CAU"
                    }
                  />
                </th>
                <td className="align-middle">
                  <span className="ms-2">{doctor.name}</span>
                </td>
                <td className="align-middle">
                  <Link
                    to={`/doctor/${doctor._id}`}
                    style={{ color: "#00BFB2", textDecoration: "none" }}
                  >
                    Ver más
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <section className="container-fluid p-3">
      <div className="d-flex align-items-center">
        <img
          src="/images/logoAdmin.svg"
          className="col-2"
          alt="Logo Admin"
          style={{
            width: "80px",
            height: "80px",
          }}
        />
        <div className="col-6 mx-3">
          <h1
            className=""
            style={{
              color: "#0B2860",
            }}
          >
            Hola, Admin
          </h1>
          <h5
            className=""
            style={{
              color: "#0B2860",
            }}
          >
            Administra los datos desde aquí.
          </h5>
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          className="btn btn-outline-secondary mt-3 col-12"
          style={{
            color: "#FFFFFF",
            backgroundColor: "#00BFB2",
            border: "none",
          }}
          onClick={() => navigate("/doctor/create")}
        >
          Agregar perfil profesional
        </button>
      </div>
      <form action="" className="mb-5">
        <label htmlFor="search" className="fst-italic align-self-start"></label>
        <input
          type="text"
          className="form-control bg-light border border-secondary rounded text-dark mx-auto"
          placeholder="Buscar por profesional o especialidad"
          style={{
            width: "340px",
            height: "48px",
            border: "2px solid #0B2860",
          }}
          name="search"
          value={searchInput}
          onChange={handleChange}
        />
      </form>
      <Table></Table>
    </section>
  );
}
export default AdminDashboard;
