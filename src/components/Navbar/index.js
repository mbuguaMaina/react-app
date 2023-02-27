import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const handleNav = (to, e) => {
    if (to === "s") {
      navigate(`/services`);
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    if (to === "a") {
      navigate(`/about`);
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
    if (to === "h") {
      navigate(`/`);
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
    // setClose(!close);
  };
  const handleNavMob = (to, e) => {
    if (to === "s") {
      navigate(`/services`);
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
    if (to === "a") {
      navigate(`/about`);
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
    if (to === "h") {
      navigate(`/`);
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
    setClose(!close);
  };
  return (
    <nav className="navigate w-full bg-dark py-2 text-white-50 position-relative sticky-top top-0">
      <Container className="d-flex gap-2 justify-content-around justify-content-lg-between align-items-center">
        <div className="logo " onClick={(e) => handleNav("h", e)}>
          comfy<span>Lodge</span>
        </div>

        <ul className="d-flex  align-items-center navigations">
          <li
            className="px-3 text-capitalize navbar-text hover "
            onClick={(e) => handleNav("r", e)}
          >
            rooms
          </li>
          <li
            className="px-3 text-capitalize navbar-text hover  "
            onClick={(e) => handleNav("a", e)}
          >
            about us
          </li>
          <li
            className="px-3 text-capitalize navbar-text hover "
            onClick={(e) => handleNav("s", e)}
          >
            services
          </li>
        </ul>
        <div className="register">
          <button className="btn btn-outline-warning rounded-pill px-lg-5 text-capitalize shadow-lg px-3">
            log in
          </button>
        </div>
        <div className="bar" onClick={() => setClose(!close)}>
          {" "}
          <FaBars />
        </div>
      </Container>
      <div
        className={
          close
            ? " show position-absolute top-0 gap-4 mobile w-75   d-flex flex-column align-items-center justify-content-center bg-black"
            : " position-absolute top-0 gap-4 mobile w-75   d-flex flex-column align-items-center justify-content-center bg-black"
        }
      >
        <div className="close">
          {" "}
          <FaTimes
            className="position-absolute close"
            onClick={() => setClose(!close)}
          />
        </div>
        <ul className="  gap-4   d-flex flex-column align-items-center justify-content-center">
          <li
            className="btn btn-outline-info w-100 rounded-pill  text-uppercase "
            onClick={(e) => handleNavMob("h", e)}
          >
            home
          </li>
          <li
            className="btn btn-outline-info w-100 rounded-pill  text-uppercase "
            onClick={(e) => handleNavMob("s", e)}
          >
            services
          </li>
          <li
            className="btn btn-outline-info w-100 rounded-pill  text-uppercase "
            onClick={(e) => handleNavMob("r", e)}
          >
            rooms
          </li>
          <li
            className="btn btn-outline-info w-100 rounded-pill  text-uppercase "
            onClick={(e) => handleNavMob("a", e)}
          >
            about
          </li>
          <li
            className="btn btn-outline-warning w-100 rounded-pill    "
            onClick={(e) => handleNavMob("reg", e)}
          >
            Login/Register
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
