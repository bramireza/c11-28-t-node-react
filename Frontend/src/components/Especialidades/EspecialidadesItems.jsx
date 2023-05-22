import  { useRef } from 'react';

const EspecialidadesItems = ()=>{
    const lista = useRef('');
    let especialidad = ['Especial 1','Especial 2','Especial 3','Especial 4','Especial 5','Especial 6'];
    let template = `Link`
    return<>
    <ul ref={lista}></ul>
    </>

}

export default EspecialidadesItems;