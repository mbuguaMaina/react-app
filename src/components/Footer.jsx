import React from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import StyledIcons from "./styledComponents/styledIcons";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaKaggle,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const handleNav = (to) => {
    if (to === "s") {
      navigate(`/services`);
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    if (to === "h") {
      navigate(`/`);
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    if (to === "r") {
      navigate(`/rooms`);
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    if (to === "c") {
      navigate(`/contact`);
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  };
  return (
    <>
      <div className="container-fluid bg-dark border-light">
        <div className="d-flex align-items-center flex-wrap p-1 p-md-4  container-fluid container-md m-auto justify-content-evenly">
          {/* single item */}
          <div className=" flex-1">
            <h3 className="text-warning fw-4 mb-4">Comfy Lodge</h3>
            <span className="d-flex flex-column   m-0 p-0 ">
              <h6 className="text-white  text-capitalize    fw-bolder ">
                {" "}
                miharati center
              </h6>
              <p className="text-white">20701, Ke.</p>
            </span>
            <span className="d-flex align-items-center justify-content-start m-0 p-0 ">
              <p className="text-white  text-capitalize  align-self-center fw-bolder ">
                Phone:
              </p>
              <p className="text-white">+254714819979</p>
            </span>
            <span className="d-flex align-items-center justify-content-start m-0 p-0">
              <p className="text-white  text-capitalize  align-self-center fw-bolder ">
                Email:
              </p>
              <p className="text-white text-wrap"> comfylodge@gmail.com</p>
            </span>
            <div className="d-flex">
              <StyledIcons>
                <span className="icon-container fs-6">
                  {" "}
                  <FaFacebookF className="icon" />
                </span>
                <span className="icon-container fs-6">
                  {" "}
                  <FaTwitter className="icon" />
                </span>
                <span className="icon-container fs-6">
                  {" "}
                  <FaLinkedin className="icon" />
                </span>
                <span className="icon-container fs-6">
                  {" "}
                  <FaWhatsapp className="icon" />
                </span>
                <span className="icon-container fs-6">
                  {" "}
                  <FaGithub className="icon" />
                </span>
                <span className="icon-container fs-6">
                  {" "}
                  <FaKaggle className="icon" />
                </span>
              </StyledIcons>
            </div>
          </div>
          {/*end of single item */}

          {/* single item */}
          <div className="  flex-1">
            <h3 className="text-white-50 fw-4 mb-4 text-decoration-underline">
              useful links
            </h3>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                {" "}
                <span onClick={() => handleNav("h")} className="text-white-50">
                  Home
                </span>{" "}
              </p>
            </span>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                {" "}
                <span onClick={() => handleNav("s")} className="text-white-50">
                  Services
                </span>{" "}
              </p>
            </span>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                {" "}
                <span onClick={() => handleNav("c")} className="text-white-50">
                  Contact
                </span>{" "}
              </p>
            </span>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                {" "}
                <span onClick={() => handleNav("r")} className="text-white-50">
                  Rooms
                </span>{" "}
              </p>
            </span>
          </div>
          {/*end of single item */}
          {/* single item */}
          <div className="  flex-1">
            <h3 className="text-white-50 fw-4 mb-4 text-decoration-underline">
              our services
            </h3>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                {" "}
                <span onClick={() => handleNav("s")} className="text-white-50">
                  Organized Hiking
                </span>{" "}
              </p>
            </span>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                {" "}
                <span onClick={() => handleNav("s")} className="text-white-50">
                  Free Entertainment
                </span>{" "}
              </p>
            </span>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                <span onClick={() => handleNav("s")} className="text-white-50">
                  Free Taxi To & from AirPort
                </span>{" "}
              </p>
            </span>
            <span className="d-flex  align-items-center justify-content-start m-0 p-0 ">
              <p className="text-warning  text-capitalize me-2 align-self-center fw-bolder ">
                <ChevronDoubleRight />
              </p>
              <p className="links">
                <span onClick={() => handleNav("s")} className="text-white-50">
                  Personalized Services
                </span>{" "}
              </p>
            </span>
          </div>
          {/*end of single item */}
          {/* single item */}
          <div className=" col-12 col-lg-3 flex-1">
            <h3 className="text-white-50 fw-4 mb-4  fs-italic">FAQ</h3>

            <Accordion>
              <Accordion.Header className=" p-0 ">
                Where are you located
              </Accordion.Header>
              <Accordion.Body className="text-white-50">
                We are located at the outskirts of miharati shopping center, off
                Ol-Kalou Road,500 m's from Manunga Parish{" "}
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header className=" p-0 ">
                Can you pay using visa
              </Accordion.Header>
              <Accordion.Body className="text-white-50">
                {" "}
                we accept both cash and visa card payments
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header className=" p-0 ">
                How is the weather like
              </Accordion.Header>
              <Accordion.Body className="text-white-50">
                its chilly during winters but warm and sunny throughout the year{" "}
              </Accordion.Body>
            </Accordion>
          </div>
          {/*end of single item */}
        </div>
      </div>
      <div className="bg-black container-fluid d-flex transition-all-2s">
        <div className="d-flex flex-column justify-content-center align-items-center  container">
          <p className="text-center p-3 pb-0 mb-0 me-1 flex-fill">
            All Rights reserved &copy;Martin Maina.
          </p>
          <p>ComfyLodge&trade;</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
