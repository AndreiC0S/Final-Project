import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/product.css";
import AddProduct from "../Components/prod_comp/AddProduct";

import Edit_product from "../Components/prod_comp/Edit_product";
import { avatar } from "@material-tailwind/react";

export default function Products() {
  const [editProd, setEditProd] = useState(false);
  const [getProd, setGetProd] = useState([]);

  const [passData, setPassData] = useState([]);

  const dataProp = (
    id,
    nume_produs,
    descriere_produs,
    poza_url,
    categorie_produs,
    pret_produs
  ) => {
    setEditProd(true);

    setPassData([]);

    const newElements = {
      id: id,
      nume_produs: nume_produs,
      descriere_produs: descriere_produs,
      poza_url: poza_url,
      categorie_produs: categorie_produs,
      pret_produs: pret_produs,
    };

    setPassData((oldArray) => [...oldArray, newElements]);

    // console.log(passData)
  };

  const deleteProd = (id, title) => {
    var answer = window.confirm(
      `are you sure you want to delete the product with ID:${id}  and title: ${title}?`
    );

    if (answer) {
      axios
        .delete(`http://localhost:3002/products/${id}`)
        .then((res) => {
          alert(`id: ${id} title: ${title} was deleted`);
          console.log("test delete", test);
          // const updatedArray = getProd.filter(item => item.id !== id)
          setGetProd(getProd.filter((item) => item.id !== id));
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      return;
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3002/products`).then((res) => {
      setGetProd(res.data.data);
      console.log(getProd);
    });
  }, []);

  

  return (
    <>
      <div className="flex  w-[100hw] h-[3vh] bg-amber-300">
        <p className="flex absolute left-[46.5%] bg-black h-[30px]  pt-[2px] text-white">
          Products
        </p>
      </div>
      {editProd && (
        <Edit_product setEditProd={setEditProd} passData={passData} dataProp={dataProp} />
      )}
      <AddProduct />

      <div
        id="parent"
        className="flex flex-col absolute right-0 top-[10.53vh] w-[50%] h-[50vh] border-2 border-indigo-600 overflow-auto "
      >
        {getProd.map((Val) => {
          return (
            <>
              <div
                key={Val.id}
                className=" flex  flex-row border-2 border-black w-[96%] h-[20%] m-[5px] zIndex "
              >
                <div className="w-[20%] h-[100%] border-e-2 border-black ">
                  <img
                    className="h-[100%] w-[100%]"
                    src={Val.poza_url}
                    alt="img"
                  />
                </div>
                <div className="w-[20%] h-[100%] border-e-2 border-black ">
                  <p>id: {Val.id}</p>
                  <p>{Val.nume_produs}</p>
                  <p className="text-s">{Val.categorie_produs}</p>
                  <p>{Val.pret_produs} $</p>
                </div>
                <div className="w-[40%] h-[100%] border-e-2 border-black overflow-auto">
                  <p className="">{Val.descriere_produs}</p>
                </div>
                <div className="w-[20%] h-[100%] bg-black">
                  <button
                    type="button"
                    onClick={() =>
                      dataProp(
                        Val.id,
                        Val.nume_produs,
                        Val.descriere_produs,
                        Val.poza_url,
                        Val.categorie_produs,
                        Val.pret_produs
                      )
                    }
                    className="w-[100%] h-[45%]  bg-green-500"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteProd(Val.id, Val.nume_produs)}
                    className="w-[100%] h-[45%] mt-[5%] bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
