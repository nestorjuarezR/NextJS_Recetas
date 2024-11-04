"use client";

// pages/index.js
import styles from './RegistrationForm.module.css';
import { useState } from "react";


type User = {
  id: number;
  first_name : string;
  last_name : string;
  age : number;
  created_at?: string;
};



export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Evita el refresco de la página

    console.log({
      name,
      lastName,
      age,
      gender,
      email,
    });
  };

  return (
    <section className={`${styles.h100} ${styles.hCustom}`}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Registro</h3>
                
                <form className="px-md-2" onSubmit={handleSubmit}>
                  {/* Nombre */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example1q">Name</label>
                  </div>

                  {/* Apellido */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example1q"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label className="form-label" htmlFor="form3Example1q">Last Name</label>
                  </div>

                  <div className="row">
                    {/* Edad */}
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          id="age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                        <label htmlFor="age" className="form-label">Age</label>
                      </div>
                    </div>
                    {/* Genero */}
                    <div className="col-md-6 mb-4">
                      <select
                        className={styles.formSelect}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="" disabled>Genero</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-4 pb-2 pb-md-0 mb-md-5">
                    <div className="col-md-6">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1w"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
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
