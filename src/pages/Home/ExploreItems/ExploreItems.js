import React from "react";
import { useState, useEffect } from "react";
import ExploreItem from "../ExploreItem/ExploreItem";

const ExploreItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-ocean-72322.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="fw-bolder text-info">All Cars</h1>
      {!cars?.length ? (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row pb-5">
          {cars?.map((car, index) => (
            <ExploreItem car={car} key={index}></ExploreItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreItems;
