import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-light">
            <section className="container-fluid d-flex row p-3 m-0">
                <div className="col-sm-6">
                    <h4>Logo</h4>
                    <p>Lorem ipsum 2018 lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                </div>
                <div className="col-sm px-5">
                    <h5>Secciones</h5>
                    <p>Secciones</p>
                    <p>Secciones</p>
                    <p>Secciones</p>
                    <p>Secciones</p>
                    <p>Secciones</p>
                </div>
                <div className="col-sm px-5">
                    <h5>QA</h5>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                    <p>Lorem ipsum</p>
                </div>
                <div className="col-sm px-5">
                    <h5>Redes Sociales</h5>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                </div>
            </section>
            <hr />
            <section className="container-fluid d-flex row m-0">
                <Link className="col-sm" to="/" style={{ color: 'black' }} href="#">Privacy Policy</Link>
                <Link className="col-sm" to="/" style={{ color: 'black' }} href="#">Terms of Service</Link>
                <Link className="col-sm" to="/" style={{ color: 'black' }} href="#">Cookies Settings</Link>
            </section>
        </footer>
    );
}

export default Footer;