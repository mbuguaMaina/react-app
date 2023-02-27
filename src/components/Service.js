import React from "react";
import { FaHiking, FaCocktail, FaCarAlt, FaServicestack } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Service = () => {
  return (
    <div className="  d-flex  mt-2 pt-2 staff-container">
      <Card className="d-flex flex-column justify-content-center align-items-center m-2">
        <span className="bg-warning icon-user1 p-2 m-2 rounded ">
          {" "}
          <FaHiking className="fs-2 text-black " />{" "}
        </span>
        <Card.Body className="body d-flex flex-column align-items-center justify-content-center">
          <Card.Title className="event w-75 text-center m-auto">
            HIKING
          </Card.Title>
          <Card.Text className="d-flex flex-column g-3 align-items-center justify-content-center">
            <span className=" text-center mt-3 text-black text-center m-auto flex-column d-flex align-items-center justify-content-center">
              We provide weekend hiking to the very heart of Nyandarua ranges{" "}
            </span>

            <Link
              to="/products"
              className=" event d-flex mt-3  float-lg-end text-decoration-none text-capitalize"
            >
              Learn More{" "}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-flex justify-content-center align-items-center m-2">
        <span className="bg-warning icon-user1 p-2 m-2 rounded ">
          {" "}
          <FaCocktail className="fs-2 text-black " />{" "}
        </span>
        <Card.Body>
          <Card.Title className="event w-75 text-center m-auto">
            Free Cocktails
          </Card.Title>
          <Card.Text className="d-flex flex-column g-3 align-items-center justify-content-center">
            <span className=" text-center mt-3 text-black  m-auto">
              We provide weekend hiking to the very heart of Nyandarua ranges{" "}
            </span>
            <Link
              to="/products"
              className="event mt-3 d-flex float-end text-decoration-none text-capitalize"
            >
              Learn More{" "}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="d-flex justify-content-center align-items-center m-2">
        <span className="bg-warning icon-user1 p-2 m-2 rounded ">
          {" "}
          <FaCarAlt className="fs-2 text-black " />{" "}
        </span>
        <Card.Body>
          <Card.Title className="event w-75 text-center m-auto">
            Entertainment
          </Card.Title>
          <Card.Text className="d-flex flex-column g-3 align-items-center justify-content-center">
            <span className=" text-center mt-3 text-black  m-auto">
              We provide weekend hiking to the very heart of Nyandarua ranges{" "}
            </span>
            <Link
              to="/products"
              className="event mt-3 d-flex float-end text-decoration-none text-capitalize"
            >
              Learn More{" "}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="d-flex justify-content-center align-items-center m-2">
        <span className="bg-warning icon-user1 p-2 m-2 rounded ">
          {" "}
          <FaServicestack className="fs-2 text-black " />{" "}
        </span>
        <Card.Body>
          <Card.Title className="event w-75 text-center m-auto">
            Entertainment
          </Card.Title>
          <Card.Text className="d-flex flex-column g-3 align-items-center justify-content-center">
            <span className=" text-center mt-3 text-black  m-auto">
              We provide weekend hiking to the very heart of Nyandarua ranges{" "}
            </span>
            <Link
              to="/products"
              className="event mt-3 d-flex float-end text-decoration-none text-capitalize"
            >
              Learn More{" "}
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
