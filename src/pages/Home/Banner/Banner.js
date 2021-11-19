import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner">
        <div className="row h-100">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="text-start">
              <h1 className="text-light">
                CarHouse Brand New <br /> Car Collection,
                <br />
                 2021 Edition
              </h1>
              <p className="text-light" >A car dealership, or vehicle local distribution, is a business that sells new or  used cars at the retail level, <br /> based on a dealership contract with an automaker or its sales subsidiary.</p>
              <button className="btn btn-danger mt-5 ">More Information</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;