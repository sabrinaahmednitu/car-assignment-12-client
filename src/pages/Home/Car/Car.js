import React from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import './Car.css'

const Car = ({car}) => {
    const {_id, img, name, price,description} = car;
    // console.log(car)

    return (
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card-group mt-3">
           <Flip left>
          <div className="card shadow-lg rounded p-4 w-75 h-75 "> 
              <img className="img-fluid" style={{ width: "100%" }} src={img} alt="" />
            <div className="card-body text-center">
              <h3 className="text-info fw-bold " >{name}</h3>
              <p className="card-text  ">{description?.slice(0, 130)}..</p>
              <h5 className="card-title text-info fw-bold ">${price}</h5>
              <Link to={`/cars/${_id}`}><button className="btn btn-primary text-center ">Purchase</button></Link>
            </div>
            
          </div>
          </Flip>
        </div>
      </div>
    );
};

export default Car;