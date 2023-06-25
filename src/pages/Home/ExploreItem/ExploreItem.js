import React from 'react';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import './ExploreItem.css';

const ExploreItem = ({car}) => {
    const { _id, img, name, price, description } = car;

    return (
      <div className=" container mt-5">
        <Flip left>
          <div className="shadow-lg rounded p-2 h-100">
            <img style={{ width: '100%' }} src={img} alt="" />
            <div className=" text-center ">
              <h3 className="  fw-bold mt-2">{name}</h3>
              <p className="card-text">{description?.slice(0, 130)}..</p>
              <h5 className="card-title">${price}</h5>
              <Link to={`/cars/${_id}`} style={{textDecoration:'none'}} >
                <button className="buy-btn bg-info mb-3">Buy Now</button>
              </Link>
            </div>
          </div>
        </Flip>
      </div>
    );
};

export default ExploreItem;