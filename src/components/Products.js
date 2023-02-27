import React from "react";
import { Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Products = ({ products }) => {
  const navigate = useNavigate();
  const handleNav = (slug) => {
    navigate(`room`, { state: { slug } });
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  if (products.length === 0) {
    return (
      <div className="d-flex   overflow-hidden container  justify-content-center align-items-center mb-5 pb-2 ">
        <h1 className=" border-danger border-bottom text-danger">
          Unfortunately No Products Exists
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-body container-md prod-container gap-3   w-auto overflow-scroll  container-fluid ">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <div className="prod  ">
              <img
                className="w-100 products-image rounded shadow"
                src={product.images[0]}
                alt=""
              />
              <Figure.Caption className="over-lay d-flex justify-content-center align-items-center  ">
                <span>
                  {" "}
                  <button
                    className="btn btn-outline-warning m-0"
                    onClick={() => handleNav(product.slug)}
                  >
                    Features
                  </button>{" "}
                </span>
              </Figure.Caption>
            </div>
            <div className="text-center text-black text-capitalize mt-2">
              <h5>{product.name}</h5>
              <p className="text-warning">{`$${product.price}`}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
Products.propTypes = {
  prod: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};
export default Products;
