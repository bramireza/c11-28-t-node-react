import Especialidades from "./Especialidades";

const EspecialidadesItems = ()=>{

    const listaCategorias =['Medicina General', 'Cardiología ','Gastroenterología',
    'Dermatología','Oftalmología','Ginecología','Pediatría',
    'Ortopedia','Neurología','Urología','Psicología',
    'Otorrinolaringología'];

    return <>
        <div className="" style={{ 
                    backgroundColor: "#1043A5",
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                    marginTop: "30px",
                    marginInline: "30px",
                    padding: "30px"
            }}>
            <h2 className="fw-bolder" style={{ 
                    color: "#FAFAFA",
                    fontFamily: "'Poppins', 'sans-serif'",
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '150%',
            }}>Especialidades</h2>
            <p style={{ 
                    color: "#FAFAFA",
                    fontFamily: "'Poppins', 'sans-serif'",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "150%",
            }}>Descubre nuestras especialidades médicas, con un equipo experto que brinda atención especializada y cuidado integral para tu salud.</p>
        </div>
        <div className="px-4" style={{ 
                    backgroundColor: "#1043A5",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    marginInline: "30px",
                    padding: "30px"
            }}>
            {listaCategorias.map((data,index)=>{
                return <Especialidades
                    key={index}
                    especialidad={data}

                />

            })}
        </div>

    </>
}

export default EspecialidadesItems;