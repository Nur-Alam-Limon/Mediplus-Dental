import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";

const Service = (props) => {
  const { name, description, cost, duration, img } = props.service;
  return (
    <div className="col">
      <Card
        style={{ width: "20rem", height: "360px" }}
        className="border rounded shadow"
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="text-primary">{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            style={{
              position: "absolute",
              bottom: "15px",
              backgroundColor: "#0d6efd",
              color: "white",
              border: "none",
              padding: "5px 10px",
            }}
            variant="primary"
          >
            Read More...
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
