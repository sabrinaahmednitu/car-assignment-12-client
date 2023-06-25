import React from 'react';
import { useState, useEffect } from 'react';
import Car from '../Car/Car';
import './Cars.css'

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://carzone-server-4ww6.onrender.com/cars')
      .then((res) => res.json())
      .then((data) => {
        setCars(data.slice(0, 8));
      });
  }, []);

  return (
    <div className=''>
     
          <h1 className="fw-bolder">Cars Collection</h1>
          {!cars?.length ? (
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div className="homeCar-container pb-5">
              {cars?.map((car, index) => (
                <Car car={car} key={index}></Car>
              ))}
            </div>
          )}    
    
    </div>
  );
};

export default Cars;
