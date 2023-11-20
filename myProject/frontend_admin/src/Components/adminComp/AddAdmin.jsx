import React, { useState, useEffect } from "react";
import axios from "axios";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function AddAdmin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    master: "0",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const selectedValue =
      event.target.type === "select-one"
        ? event.target.selectedOptions[0].value
        : value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    
    try {
      axios
        .post(`http://localhost:3002/admins/`, formData)
        .then((res) => {
          // setGetProd(res.data.data);
        })
        .catch((error) => {
          alert(error);
        });
    } catch (err) {
      if (err.response.status === 401) {
        alert("ceva nu a mers bine...");
      } else if (err.response.status === 400) {
        alert("parola trebuie sa contina caractere speciale");
      }
    }
  };

  return (
    <div className="flex absolute top-[10.6vh] left-[10px]  flex-col border-2 border-black mt-[-2px]   p-[10px] items-center bg-gray-500">
      <h1>Add Admin</h1>
      <Formik
        initialValues={formData}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ errors, touched }) => (
          <Form className="text-center">
            <Field
              name="username"
              onChange={handleInputChange}
              placeholder="      username"
              className="flex mb-[7px] border-2 border-black rounded-s"
            />
            <Field
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="      email"
              className="flex mb-[8px]  border-2 border-black rounded-s"
            />
            <Field
              name="password"
              onChange={handleInputChange}
              placeholder="      password"
              className="flex mb-[8px]  border-2 border-black rounded-s"
            />

            <div className="flex">
              <label htmlFor="master">Master Admin? </label>

              <Field
                as="select"
                name="master"
                onChange={handleInputChange}
                className="flex mb-[8px] ml-[5px] border-2 border-black rounded-s"
              >
                <option value="0">Nu</option>
                <option value="1">DA</option>
              </Field>
            </div>

            <button
              type="submit"
              className="w-[5vw] ml-[25%] border-2 border-black bg-green-500"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
