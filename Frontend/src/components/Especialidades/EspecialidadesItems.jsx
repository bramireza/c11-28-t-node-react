import Especialidades from "./Especialidades";

const EspecialidadesItems = ()=>{

    const listaCategorias =['Especialidad 1', 'Especialidad 2','Especialidad 3','Especialidad 4','Especialidad 5','Especialidad 6','Especialidad 7','Especialidad 8','Especialidad 9','Especialidad 10','Especialidad 11','Especialidad 12'];

    return <>
        <div className="p-3">
            <h2 className="fw-bolder">Especialidades</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis molestias facilis iusto saepe vero autem temporibus quibusdam numquam nisi, quaerat ducimus eum omnis eos eaque sint magni ratione voluptatum?</p>
        </div>
        <div className="row px-4">
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