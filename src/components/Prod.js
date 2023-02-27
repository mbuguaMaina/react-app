import React from "react";
import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Prod = ({ prods }) => {
  const { slug, images, name, price, id } = prods;

  const navigate = useNavigate();
  const handleNav = () => {
    navigate(`room`, { state: { slug } });
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <Figure>
      <div className="prod " key={id}>
        <img className="prod-image rounded shadow" src={images[0]} alt="" />
        <Figure.Caption className="over-lay d-flex justify-content-center align-items-center  ">
          <span>
            {" "}
            <button className="btn btn-outline-warning m-0" onClick={handleNav}>
              Features
            </button>
          </span>
        </Figure.Caption>
      </div>
      <div className="text-center text-black text-capitalize mt-2">
        <h5>{name}</h5>
        <p className="text-warning">{`$${price}`}</p>
      </div>
    </Figure>
  );
};
Prod.propTypes = {
  prod: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
export default Prod;
