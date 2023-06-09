import mapa from '../../assets/mapacontacto.png';

function ContactUs() {
    return ( 
        <section className="container-fluid row m-0 p-3">
            <div className="p-2 col-sm-4">
                <h2 className="my-2">Contáctanos</h2>
                <h5 className="p-3">Our friendly team would love to hear from you. Lorem Ipsum.</h5> 
                <div>
                    <p>hello@relume.io</p>
                    <p>+1 (555) 000-0000</p>
                    <p>123 Sample St, Sydney NSW 2000 AU</p>
                </div>
            </div>
            <div className="col-sm-8">
                <img src={mapa} alt="mapa" className='img-fluid'/>
            </div>
        </section>
    );
}

export default ContactUs;