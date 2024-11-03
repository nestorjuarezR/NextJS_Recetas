// import styles from "./styles.module.css"
import Link from "next/link"


export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo a la izquierda */}
          {/* <Link href="/" className="navbar-brand">
            <img
              src="/logo.png" // Ruta de la imagen del logo (puedes cambiarlo)
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' '}RecetasApp
          </Link> */}
        <p>Logo</p>
  
          {/* Botón para móvil */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Links a la derecha */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/profile" className="nav-link">
                  Mi Perfil
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register" className="nav-link">
                  Registro
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }