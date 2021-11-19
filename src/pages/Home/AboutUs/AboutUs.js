import React from 'react';
import { Col, Row} from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';

const AboutUs = () => {
    return (
         <div className="mt-5">
           <Row>
               <Col md={6} xs={12} >
                <img style={{width:"600px"}} className="img-fluid" src="https://cdn.dribbble.com/users/902546/screenshots/10810236/image_4x.png" alt="" />
                </Col> 
               <Col md={6} xs={12}>
                <h2 className="mt-5 fw-bold">We are Car-House travel Agency</h2>
                <h3 className=" fw-bold ">Our Vision is Travel The Whole World</h3> <br /> 
                <h4 className="text-info">Travel Agent responsibilities include:</h4> <br /> 
                <LightSpeed left> <li>Planning and selling transportations, accommodations, insurance and other travel services</li> 
                <li  >Cooperating with clients to determine their needs and advising them appropriate destination,</li> <br />
                <li>Providing relevant information, brochures and publications (guides, local customs, maps, regulations, events etc) </li>
                <li >Providing relevant information, brochures and publications (guides, local customs, maps, regulations, events etc) </li> </LightSpeed>
                <Slide left> <button className="btn btn-info text-white fw-bold mt-5">More About Us</button> </Slide>
               </Col>
           </Row>
        </div>
    );
};

export default AboutUs;