import "./contactUs.css"
function ContactUs() {
    return ( 
        <section id="contact-section" className="container-fluid row m-0 p-3">
            <div className="p-2 col-sm-4">
                <h2 className="my-2">Contáctanos</h2>
                <h5 className="p-3">Our friendly team would love to hear from you. Lorem Ipsum.</h5> 
                <div id="container-contact">
                    <div id="images-container">
                        <img src="../../../public/images/mail-icon.PNG" alt="" />
                        <img src="../../../public/images/phone-icon.PNG" alt="" />
                        <img src="../../../public/images/map-icon.PNG" alt="" />
                    </div>
                    <div>
                        <p>hello@relume.io</p>
                        <p>+1 (555) 000-0000</p>
                        <p>123 Sample St, Sydney NSW 2000 AU</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-8">
                <img src="..." alt="mapa" />
            </div>
        </section>
    );
}

export default ContactUs;