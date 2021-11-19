import React from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import "./CallToAction.css";

const CallToAction = () => {
  return (
   
    <CardGroup className="mb-5 shadow-lg m-2 g-2" >
  <Card className="w-75 g-2" >
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1614377284368-a6d4f911edc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Title className="text-info fw-bold" >Luxery Car</Card.Title>
      <Card.Text>
        A luxury car is a car that provides increased levels of comfort, equipment, amenities, quality, performance, and status compared to regular cars for an increased price.
        Traditionally, most luxury cars were large vehicles, though smaller sports-oriented models were always produced. “Compact“ luxury vehicles such as hatchbacks, and off-road capable sport utility vehicles, are relatively modern trends
          </Card.Text>
    </Card.Body>
   
      </Card>
      
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Title className="text-info fw-bold" >Sports Car</Card.Title>
      <Card.Text>
        A supercar – also called exotic car – is a loosely defined description of street-legal, high-performance luxury sports car. Since the 2000s or 2010s, the term hypercar has come into use for the highest performing supercars.
      </Card.Text>
    </Card.Body>
   
      </Card>
      
  <Card>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
    <Card.Body>
      <Card.Title className="text-info fw-bold " >Super Car</Card.Title>
      <Card.Text>
       A sports car is a car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, or thrill of driving. Sports cars originated in Europe in the early 1900s and are currently produced by many manufacturers around the world
      </Card.Text>
    </Card.Body>
    
      </Card>
      
</CardGroup>
  );
};

export default CallToAction;
