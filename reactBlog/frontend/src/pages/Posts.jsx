import React, { useState, useEffect } from "react";

import axios from "axios";

import configData from "../config.json";

import { Link } from "react-router-dom";

export default function Postz() {
  const [postz, setPostz] = useState([{}]);
  useEffect(() => {
    console.log("primesc datele");
    axios
      .get(configData.SERVER_POST_URL)
      .then(({ data }) => {
        console.log(data["data"]);
        setPostz(data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <h1>Ultimele articole</h1>
      {postz.map((data) => (
        
        <div key={data.id}>
          {/* <p>{data.titlu}</p> */}
        <div className="container">
        <div className="row mt-4">
          
          <div className="col">
            <div className="card mb-4">
              <img src={data.poza} alt="..." />
              
              <div className="card-body">
                <div className="small text-muted">January 1, 2023</div>
                <h2 className="card-title h4">{data.titlu}</h2>
                <p className="card-text">
                {data.continut}
                </p>
                <Link to={'/post/'+data.id} className='nav-Link'>Read More</Link>
                {/* <a className="btn btn-primary" href="#!">
                  Read more →
                </a> */}

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      ))}
      
    </>
  );
}
