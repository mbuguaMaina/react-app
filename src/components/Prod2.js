import React from "react";
import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Carousel } from "react-bootstrap";
const Prod = ({ prods }) => {
  const navigate = useNavigate();
  const handleNav = (slug) => {
    navigate(`room`, { state: { slug } });
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <Carousel>
      {prods.map((prod) => {
        return (
          <Carousel.Item key={prod.id}>
            <Figure>
              <img
                className="w-100 rounded shadow"
                src={prod.images[0]}
                alt=""
              />
              <Figure.Caption className="over-lay d-flex flex-column justify-content-center align-items-center  ">
                <span>
                  {" "}
                  <button
                    className="btn btn-warning m-0"
                    onClick={() => handleNav(prod.slug)}
                  >
                    Features
                  </button>{" "}
                </span>
              </Figure.Caption>

              <div className="text-center text-black text-capitalize mt-2">
                <h5>{prod.name}</h5>
                <p className="text-warning">{`$${prod.price}`}</p>
              </div>
            </Figure>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
Prod.propTypes = {
  prod: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
export default Prod;
