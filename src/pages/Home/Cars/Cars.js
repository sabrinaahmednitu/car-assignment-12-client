import React from "react";
import { useState, useEffect } from "react";
import Car from "../Car/Car";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-ocean-72322.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="fw-bolder text-info">
        Cars Collection
      </h1>
      {!cars?.length ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {cars?.map((car, index) => (
            <Car car={car} key={index}></Car>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
