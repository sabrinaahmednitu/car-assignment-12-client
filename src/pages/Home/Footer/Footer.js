import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
      <div className="pt-5 pb-2 text-light footer">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              <h5 className="fw-bold" >TOP BRAND</h5>
              <p> Audi</p>
              <p>Lamborghini  </p>
              <p> Mercedes-Benz</p>
              <p> Tesla</p>
              <p> Mercedes</p>
             

            </div>
            <div className="col-lg-3">
              <h5 className="fw-bold" >Our Best car</h5>
              <p> Tata Punch</p>
              <p>Maruti celerio  </p>
              <p> Toyota</p>
              <p> Tesla</p>
              <p>Skoda Slavia </p>
             

            </div>
            <div className="col-lg-3 text-start">
              <h5 className="fw-bold" >Our Service </h5>
              <p> Car Store</p>
              <p>Car Repier </p>
              <p> Car Washing</p>
              <p> Parts Selling</p>
              <p> Car buiyng Guide</p>
            </div>
            <div className="col-lg-3 text-start">
              <h5 className="fw-bold" >CONTACT INFO</h5>
              <p>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</p>
              <p> 345-677-554</p>
              <p> 323-678-567</p>
               <p>carinfo@gmail.com</p>
            </div>

            
          </div>
          <div className='mt-5 mb-3' >
            <p className="fw-bold" >All copyrights reserved © 2021 - Designed & Developed by sabrina ahmed nitu</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    );
};

export default Footer;