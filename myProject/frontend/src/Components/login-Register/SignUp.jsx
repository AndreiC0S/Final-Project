import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SignUp() {
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Adresa de email invalida!")
  //     .required("Camp obligatoriu!"),
  //   parola: Yup.string().required("Camp obligatoriu!"),
  //   //   .matches(
  //   //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$-%^&*])(?=.{8,})/,
  //   //   "Must Contain min 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //   // ),
  // });

  return (
    <>
      <div
        className="flex justify-center items-center ml-[42%] mt-[10%] w-[350px] h-[350px]
      bg-amber-400 rounded-xl opacity-95  border-solid border-2 border-black
      "
      >
        <form
          action="http://localhost:3002/users"
          method="post"
          className="flex flex-col"
        >
          <p className="mb-[2vh]">Register</p>

          <input
            className="rounded mb-[1vh]"
            type="text"
            name="nume"
            placeholder="  Nume"
          />
          <input
            className="rounded mb-[1vh]"
            type="text"
            name="prenume"
            placeholder="  Prenume"
          />
          <input
            className="rounded mb-[1vh]"
            type="text"
            name="email"
            placeholder="   Email"
          />
          <input
            className="rounded mb-[1vh]"
            type="password"
            name="parola"
            placeholder="Password"
          />

          <input
            className=" ml-[0%] border-solid border-2 border-indigo-600 p-[10px] bg-indigo-600 rounded-xl"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </>
  );
}
