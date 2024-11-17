import Link from "next/link";
import { CiAlignBottom } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiStreamOn } from "react-icons/ci";
import { CiBowlNoodles } from "react-icons/ci";
import Image from 'next/image';



export default async function Index() {
  return (
    <div className="">
      <div
        className="parallax"
        style={{
          backgroundImage: 'url("/store/cocina.jpg")',
          height: '600px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad aquí
          backgroundBlendMode: 'overlay', // Aplica la opacidad sin afectar la imagen
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Contenido dentro del parallax */}
        <div className="container text-center text-white">
          <h1 className="display-3">Haz que cada día sea único</h1>
          <Link href="/categorias" passHref>
          </Link>
        </div>

        
      </div>

      <div className="container py-5">
      {/* <h2 className="text-center mb-5">Check Our <span className="text-danger">Services</span></h2> */}

      <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="text-success h1 mb-3">
                <CiBowlNoodles />
                </div>
                <h5 className="card-title mb-3">Lorem Ipsum</h5>
                <p className="card-text text-muted">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
          </div>

        <div className="col-md-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="text-success h1 mb-3">
              <CiEdit />
              </div>
              <h5 className="card-title mb-3">Sed ut perspici</h5>
              <p className="card-text text-muted">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="text-success h1 mb-3">
              <CiBookmark />
              </div>
              <h5 className="card-title mb-3">Magni Dolores</h5>
              <p className="card-text text-muted">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="text-success h1 mb-3">
              <CiStreamOn />

              </div>
              <h5 className="card-title mb-3">Nemo Enim</h5>
              <p className="card-text text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
        </div>
      </div>
      </div>

    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
        <Image
          src={"/store/stats-img.svg"}          
          alt="Team analyzing dashboard"
          width={500}
          height={500}
          className="img-fluid rounded mb-3"
        />
        </div>

        <div className="col-lg-6">
          <div className="row g-4">
            <div className="col-sm-6">
              <div className="d-flex align-items-center mb-2">
                <svg className="text-success me-2" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
                <h2 className="display-5 mb-0">232</h2>
              </div>
              <div>
                <h3 className="h5 mb-1">Happy Clients</h3>
                <p className="text-muted small">consequuntur quae</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="d-flex align-items-center mb-2">
                <svg className="text-success me-2" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
                <h2 className="display-5 mb-0">521</h2>
              </div>
              <div>
                <h3 className="h5 mb-1">Recetas</h3>
                <p className="text-muted small">adipisci atque cum quia aut</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="d-flex align-items-center mb-2">
                <svg className="text-success me-2" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
                <h2 className="display-5 mb-0">1453</h2>
              </div>
              <div>
                <h3 className="h5 mb-1">Hours Of Support</h3>
                <p className="text-muted small">aut commodi quaerat</p>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="d-flex align-items-center mb-2">
                <svg className="text-success me-2" width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                </svg>
                <h2 className="display-5 mb-0">32</h2>
              </div>
              <div>
                <h3 className="h5 mb-1">Hard Workers</h3>
                <p className="text-muted small">rerum asperiores dolor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </div>
    





      

    
  );
}


