"use client";

// pages/index.js
import Link from 'next/link';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm() {
  return (
    <section className={`${styles.h100} ${styles.hCustom}`}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Registro</h3>
                {/* Formulario */}
                <form className="px-md-2">
                  {/* Nombre */}
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example1q" className="form-control"  required/>
                    <label className="form-label" htmlFor="form3Example1q">Name</label>
                  </div>

                  {/* Last Name */}
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example1q" className="form-control" required/>
                    <label className="form-label" htmlFor="form3Example1q">Last Name</label>
                  </div>

                  <div className="row">
                    {/* Edad */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input type="text" className="form-control" id="age" />
                        <label htmlFor="age" className="form-label">Age</label>
                      </div>
                    </div>
                    {/* Genero */}
                    <div className="col-md-6 mb-4">
                    <select className={styles.formSelect}>
                        <option value="1" disabled>Genero</option>
                        <option value="2">Female</option>
                        <option value="3">Male</option>
                        <option value="4">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <input type="text" id="form3Example1w" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1w">Correo electronico</label>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success btn-lg mb-1">Registro</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
