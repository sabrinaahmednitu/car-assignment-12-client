import React from 'react';
import { useState, useEffect } from 'react';
import ExploreItem from '../ExploreItem/ExploreItem';
import './ExploreItems.css'

const ExploreItems = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://carzone-server-4ww6.onrender.com/cars')
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
        <div className="all-cars-container pb-5">
          {cars?.map((car, index) => (
            <ExploreItem car={car} key={index}></ExploreItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreItems;
