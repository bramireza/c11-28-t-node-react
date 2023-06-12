import './style.css';
// import imgsomos from '../../assets/imgquienes.png';
import cruz from '../../assets/cruzsomos.svg';


function QuienesSomos() {
  return (
    <>
      
        <div className='somos mx-auto'>
          <div className="contimg">
            <div className='cuadroAzul'>
              <h2 className='py-3'>¿Quienes somos?</h2>
              <p className=''>Somos Syncare Hospital, una institución de salud comprometida con el bienestar y la atención médica de calidad. Nuestro equipo de profesionales altamente capacitados y nuestra infraestructura de vanguardia nos permiten brindar servicios médicos de excelencia a nuestros pacientes. 
                  <br/> Brindamos:</p>
              <p ><span><img src={cruz} alt="cruzimg" className='parraimg me-1' /></span> Amplia especialización</p>
              <p ><span><img src={cruz} alt="cruzimg" className='parraimg me-1' /></span> Atención Integra</p>
              <p ><span><img src={cruz} alt="cruzimg" className='parraimg me-1' /></span> Tecnologia Avanzada</p>
            </div>
          </div>
        </div>

      
    </>
    
  );
}

export default QuienesSomos;