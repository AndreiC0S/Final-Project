import React, { useState, useEffect } from "react";
import axios from "axios";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./css/edit_proc.css"

export default function ({setEditProd, passData, dataProp}) {

    console.log('passData', passData[0].id)
    const validationSchema = Yup.object().shape({
        nume_produs: Yup.string()
          .min(2, "Too Short!")
          .max(200, "Too Long!")
          .required("Camp obligatoriu!"),
        descriere_produs: Yup.string()
          .min(2, "Too Short!")
          .max(500, "Too Long!")
          .required("Camp obligatoriu!"),
        poza_url:
          Yup.string()
          .required("Camp obligatoriu!"),
        categorie_produs: Yup.string()
          .min(2, "Too Short!")
          .max(45, "Too Long!")
          .required("Camp obligatoriu!"),
        pret_produs: Yup.string()
          .min(1, "Too Short!")
          
          .required("Camp obligatoriu!"),
      });
    
      const [formData, setFormData] = useState({
        
      });
      
      useEffect(()=>{
        const newArr = {
        id: passData[0].id,
        nume_produs: passData[0].nume_produs,
        descriere_produs: passData[0].descriere_produs,
        poza_url: passData[0].poza_url,
        categorie_produs: passData[0].categorie_produs,
        pret_produs: passData[0].pret_produs,
        }
        setFormData(newArr)
        
      },[dataProp])

      const [err, setError] = useState(false);

      const [classErr, setClassErr] = useState(true)

      const [isClass, setClass] = useState('border-[5px] roumded-lg border-red-500')
    
      const handleInputChange = (event) => {
        
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        console.log('formData', passData[0].id)
        try {
           axios
            .put(`http://localhost:3002/products/${passData[0].id}`,formData)
            .then((res) => {
                setEditProd(false)
              // setGetProd(res.data.data);
            })
            .catch((error) => {
              alert(error);
              setEditProd(false)
            });
        } catch (err) {
            setEditProd(false)
          if (err.response.status === 401) {
            alert("ceva nu a mers bine...");
            setError(true);
          }
        }
      };
  return (
    <div id="editBox" className='flex absolute flex-col space-y-8 text-center items-center w-[30vw] h-[80.3vh] left-[20%] top-[10.5%]   z-40 rounded-md '>
        

        <button onClick={()=>setEditProd(false)} className="flex absolute right-[10px] top-[10px] text-xl">X</button>
        <img className=' w-[10vw] h-[15vh] rounded-lg shadow-lg shadow-black mt-[10px]' src={passData[0].poza_url} alt="img" />
        <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
        
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col space-y-5 ">
            <Field name="nume_produs" onChange={handleInputChange} placeholder ="      nume produs" className={`flex shadow-md shadow-black  ${errors.nume_produs && touched.nume_produs ? isClass : "border-2 border-black"}  `}/> 
            

            <Field as="textarea" name="descriere_produs" onChange={handleInputChange}  placeholder ="      descriere produs" className={`flex  h-[20vh] w-[100%] shadow-md shadow-black ${errors.descriere_produs && touched.descriere_produs ? isClass : "border-2 border-black"}`}/> 
            {errors.descriere_produs && touched.descriere_produs ? (
              setClassErr(true)
            ) : setClassErr(false)}

            <Field name="poza_url" onChange={handleInputChange} placeholder="      poza url" className={`flex shadow-md shadow-black  ${errors.poza_url && touched.poza_url ? isClass : "border-2 border-black"}`}/> 
            

            <Field name="categorie_produs" onChange={handleInputChange} placeholder ="     categorie_produs" className={`flex shadow-md shadow-black ${errors.categorie_produs && touched.categorie_produs ? isClass : "border-2 border-black"}`}/> 
            

            <Field name="pret_produs" onChange={handleInputChange} placeholder="     pret produs" className={`flex shadow-md shadow-black ${errors.pret_produs && touched.pret_produs ? isClass : "border-2 border-black"}`}/> 
            

            <button type="submit"  className="w-[5vw] ml-[25%] border-2 border-black bg-green-500">Submit</button>
          </Form>
         )} 
      </Formik>
        
    </div>
  )
}
