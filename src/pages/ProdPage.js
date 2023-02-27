import React, { useContext, useState } from "react";
import { ProdsContext } from "../components/Context";
import { useLocation } from "react-router-dom";
import StyledHero from "../components/StyledComponent";
import Banner from "../components/Banner";
import NavBtn from "../components/NavBtn";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaTimesCircle,
} from "react-icons/fa";

const ProdPage = () => {
  const params = useContext(ProdsContext);
  const [show, SetShow] = useState(false);
  const [i, SetI] = useState(0);
  const { state } = useLocation();

  let slug = state.slug;

  const { getProd } = params;
  let prod = getProd(slug);
  const {
    images,
    name,
    description,
    extras,
    pets,
    breakfast,
    size,
    price,
    capacity,
    policy,
  } = prod;
  const handleImg = (i) => {
    SetI(i);
    SetShow(true);
  };
  const handleSlide = (dir) => {
    let newIndex;
    dir === "l"
      ? (newIndex = i === 0 ? images.length - 1 : i - 1)
      : (newIndex = i === images.length - 1 ? 0 : i + 1);
    SetI(newIndex);
  };
  return (
    <div className="PodPageContainer">
      <StyledHero img={images[0]}>
        <Banner desc={`${name} Room`}>
          <NavBtn destination="/rooms">Back To Rooms</NavBtn>
        </Banner>
      </StyledHero>

      <div className="  roomContainer">
        <div className=" room__details">
          <div className="searchCard">
            <h5 className="room__title">Room Details</h5>
            <div className="search__item">
              <label htmlFor="capacity" className="label">
                capacity:
              </label>
              <div className="search__item--details">
                {capacity === 1 ? `${capacity} Person` : `${capacity} People`}
              </div>
            </div>
            <div className="search__item">
              <label htmlFor="capacity" className="label">
                price:
              </label>
              <div className="search__item--details">${price}</div>
            </div>
            <div className="search__item">
              <label htmlFor="capacity" className="label">
                room size:
              </label>
              <div className="search__item--details">{size} SQFT</div>
            </div>
            <p className="return">
              Return Policy: <span className="return__policy">{policy}</span>
            </p>
            <button className="book">Book Now</button>
          </div>
          <div className="results">
            {show && (
              <div className="modal">
                <div className="image-container">
                  <div className="img">
                    <div className="cancel">
                      <FaTimesCircle onClick={() => SetShow(false)} size={30} />
                    </div>
                    <div className="arrow1">
                      <FaArrowAltCircleLeft
                        onClick={() => {
                          handleSlide("l");
                        }}
                        size={40}
                      />
                    </div>
                    <img
                      src={images[i]}
                      style={{ cursor: " zoom-out" }}
                      onClick={() => SetShow(!show)}
                      alt=""
                    />
                    <div className="arrow2">
                      <FaArrowAltCircleRight
                        onClick={() => handleSlide("r")}
                        size={40}
                      />
                    </div>
                  </div>
                </div>{" "}
              </div>
            )}
            <div className="other-img ">
              {images.map((image, i) => (
                <img
                  onClick={() => handleImg(i)}
                  key={i}
                  className="rounded img1 shadow"
                  src={image}
                  alt=""
                />
              ))}
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>{description}</p>
            </div>
            <div className="extras ">
              <div>
                {" "}
                <ul className="p-0 m-0">
                  <h3 className="fw-bold">Extras</h3>
                  {extras.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="list-unstyled text-black p-0 m-0"
                      >{`-${item}`}</li>
                    );
                  })}
                </ul>
              </div>
              <div className="allowed">
                <h3>Info</h3>
                <p>Price:${price} </p>
                <p>
                  Max-People:
                  {capacity === 1 ? "1 person" : `${capacity} people`}{" "}
                </p>{" "}
                <p>Room size: {size} SQFT</p>
                {pets ? <p>pets allowed</p> : <p>pets are not allowed</p>}
                {breakfast ? <p>free breakfast</p> : <p>no free breakfast</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdPage;
