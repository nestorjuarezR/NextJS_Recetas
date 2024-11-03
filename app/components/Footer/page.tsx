import { Link } from "lucide-react";

export default function Footer(){

    return(
        <footer className="bg-light bg-light">
            <div className="container">
                <div className="row text-secondary">
                    <div className="col-lg-4 mt-4">
                        <h5 >Sobre Nosotros</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo eu orci auctor fermentum.</p>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <h5>Enlaces</h5>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li>
                            <Link href="register/" className="nav-link">
                            Registro   
                            </Link>
                            </li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <h5>Contacto</h5>
                        <p>Tel: +123 456 789</p>
                        <p>Email: contacto@ejemplo.com</p>
                        <p>Dirección: Calle Falsa 123, Ciudad</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}