import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      <div className="banner">
        <div className=" banner-text  ">
          <h1 className=" text-start">
            CarHouse Brand New <br /> Car Collection - 2023 Edition
          </h1>
          <p className=" text-start">
            A car dealership, or vehicle local distribution, is a business that
            sells new or used cars at the retail level, <br /> based on a
            dealership contract with an automaker or its sales subsidiary.
          </p>
          <button className=" banner-btn">
            More Information
          </button>
        </div>
      </div>
    );
};

export default Banner;