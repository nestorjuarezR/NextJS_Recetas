"use client";

// pages/index.js
import styles from './RegistrationForm.module.css';
import React, { useState } from "react";
import {createUser} from "../actions";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation"; // Importa useRouter


type User = {
  email: string;
  id: number;
  first_name : string;
  last_name : string;
  age : number;
  created_at?: string;
};

const initialState = {
  id: -1,
  first_name: '',
  last_name: '',
  age: 0,
  email: '',
}

const supabase =  createClient();


const RegistrationForm = () => {

  const [formValues, setFormValues] = useState<User>(initialState);
  const router = useRouter(); // Inicializa useRouter




  const handleFormAction = async (formData: FormData) => {
    if (formValues.id === -1){
      // Es un nuevo usuario
      await createUser(formData);
      //Redirigir a otra pagina despues de enviar los datos
      router.push("/");

    }
    setFormValues(initialState);
  };


  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormValues((prevFormValues) => ({...prevFormValues, [name]: value}));
  };

  return (
    <section className={`${styles.h100} ${styles.hCustom}`}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Registro</h3>
                
                <form className="px-md-2" action={handleFormAction}>
                  {/* Nombre */}
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">Name</label>
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      maxLength={100}
                      minLength={2}
                      value={formValues.first_name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>

                  {/* Apellido */}
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      value={formValues.last_name}
                      onChange={handleFormChange}
                      maxLength={100}
                      minLength={3}
                      required
                    />
                  </div>

                  <div className="row">
                    {/* Edad */}
                    <div className="col-md-6 mb-4">
                    <label htmlFor="age" className="form-label">Age</label>
                      <div className="form-outline datepicker">
                        <input
                          type="text"
                          className="form-control"
                          name="age"
                          value={formValues.age}
                          onChange={handleFormChange}
                          min={1}
                          maxLength={100}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1q">Correo Electronico</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={formValues.email}
                      onChange={handleFormChange}
                      maxLength={100}
                      minLength={3}
                      required
                    />
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


export default RegistrationForm;