import React, { useEffect, useState, useContext } from "react";

import "./LoginPopup.css";

import { useNavigate, Link } from "react-router-dom";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { AuthContext } from "../../context/authContext";

import NavBar from "../layout/NavBar";
import { AxiosError } from "axios";

export default function LoginPopup({ toggle, isUser }) {

  let navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adresa de email invalida!")
      .required("Camp obligatoriu!"),
    parola: Yup.string().required("Camp obligatoriu!"),
    
  });

  const [formData, setFormData] = useState({
    email: "",
    parola: "",
  });

  const [err, setError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { login } = useContext(AuthContext);


  
  
  const handleSubmit = async (e) => {
    try {
      await login(formData); // await axios.post("/users/login", inputs);
      // navigate("/");
      toggle()
      isUser()
      
    } catch(err) {if(err.response.status === 401){
        alert('nume sau parola gresita')
        setError(true)
        console.log(err)
    } 
      }
    }
  return (
    <>
    
      <div className="" id="top">
        <div
          id="LoginPopup"
          className=" absolute w-max h-[350px] top-[30.5%] left-[41%] bg-amber-400 rounded-xl p-[1vw]  "
        >
          <button
            className="absolute top-[1vh] right-[0.5vw] bg-black border-solid border-2 border-black p-[5px] rounded-[20px]"
            onClick={toggle}
          >
            X
          </button>


          <Formik
            initialValues={formData}
            onSubmit={handleSubmit}
            enableReinitialize
            validationSchema={validationSchema}
          >
            <Form>
              <p className=" text-black mb-[3vh] ">Welcome back</p>

              {err && (
              <p className="text-red-700 mb-[1vh]"> Email sau parola gresita</p>
              )}
              <Field
                className="block rounded block text-black "
                onChange={handleInputChange}
                type="text"
                id="email"
                name="email"
                placeholder="   email"
              />

              <Field
                className="block mt-[20px]  rounded block text-black"
                onChange={handleInputChange}
                name="parola"
                type="password"
                autoComplete="off"
                placeholder="   password"
              />

              <div className="mt-8">
                <button
                  type="submit"
                  
                  className="border-solid border-2 border-indigo-600 p-[10px] bg-indigo-600 rounded-xl"
                >
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
