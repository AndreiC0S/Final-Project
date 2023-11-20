import React, { useState, useContext } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AuthContext } from "../../context/authContext";

export default function DeleteAdmin() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.accessToken)
  const token = currentUser.accessToken;

  const [formData, setFormData] = useState({
    username: "",
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
    // console.log("formData", formData);
    try {
      axios
        .delete(`http://localhost:3002/admins/${formData.username}`, {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        })
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
    <div className="flex absolute top-[10.6vh] left-[300px]  flex-col border-2 border-black mt-[-2px]   p-[10px] items-center bg-gray-500">
      <h1>Delete Admin</h1>
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
