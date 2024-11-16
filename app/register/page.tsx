"use client";

// pages/index.js
import styles from './RegistrationForm.module.css';
import React, { useState } from "react";
import {createUser} from "../actions";
import { createClient } from "@/utils/supabase/client";


type User = {
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
}

const supabase =  createClient();


const RegistrationForm = () => {

  const [formValues, setFormValues] = useState<User>(initialState);

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


  const handleFormAction = async (formData: FormData) => {
    if (formValues.id === -1){
      // Es un nuevo usuario
      await createUser(formData);
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
                    <label className="form-label" htmlFor="form3Example1q">Name</label>
                  </div>

                  {/* Apellido */}
                  <div className="form-outline mb-4">
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
                    <label className="form-label" htmlFor="form3Example1q">Last Name</label>
                  </div>

                  <div className="row">
                    {/* Edad */}
                    <div className="col-md-6 mb-4">
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
                        <label htmlFor="age" className="form-label">Age</label>
                      </div>
                    </div>
                    {/* Genero */}
                    {/* <div className="col-md-6 mb-4">
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
                    </div> */}
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


export default RegistrationForm;