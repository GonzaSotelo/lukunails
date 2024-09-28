
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Para los íconos de Bootstrap (si los usas)

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    {/* Columna de enlaces */}
                    <Col md={4} className="text-center" >
                        <h5>Links</h5>
                        <ul className="list-unstyled ">
                            <li><a href="#inicio" className="text-white">Inicio</a></li>
                            <li><a href="#sobreNosotros" className="text-white">Sobre Nosotros</a></li>
                            <li><a href="#servicios" className="text-white">Servicios</a></li>
                            <li><a href="#contacto" className="text-white">Contacto</a></li>
                        </ul>
                    </Col>

                    {/* Columna de información */}
                    <Col md={4} className="text-center">
                        <img src="/img/logo.png" alt="logo-icono" className="img-fluid" style={{ width: '120px' }} />
                        <h5>Lulu Nails</h5>
                        <p>Desde 2016 poniendo mas bellas tus manos</p>
                    </Col>

                    {/* Columna de redes sociales */}
                    <Col md={4} className="text-center">
                        <h5>Nuestras Redes</h5>
                        <div>
                            <a href="https://facebook.com" className="text-white mx-2">
                                <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
                            </a>
                            <a href="https://twitter.com" className="text-white mx-2">
                                <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
                            </a>
                            <a href="https://instagram.com" className="text-white mx-2">
                                <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Copyright */}
                <Row className="mt-3">
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2024 Lulu Nails. </p>
                            <p>web creada por Tu Socio Tech</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
