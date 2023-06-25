import React from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import './Car.css';

const Car = ({ car }) => {
  const { _id, img, name, price, description } = car;
  // console.log(car)

  return (
  
        <div className=" mt-5">
          <Flip left>
            <div className=" shadow-lg rounded p-4 h-100">
              <img style={{ width: '100%' }} src={img} alt="" />
              <div className=" text-center">
                <h3 className=" fw-bold ">{name}</h3>
                <p className="card-text  ">{description?.slice(0, 130)}..</p>
                <h5 className="card-title text-info fw-bold ">${price}</h5>
                <Link to={`/cars/${_id}`}>
                  <button className="btn purchase-btn ">
                    Purchase
                  </button>
                </Link>
              </div>
            </div>
          </Flip>
        </div>
   
  );
};

export default Car;
