import React from "react";

const Banner = ({ children, desc, paragraph }) => {
  return (
    <div className="banner">
      <div className="b-item d-flex flex-column  align-items-center justify-content-center">
        <div
          className="  col-12 col-md-12 shadow p-4 bg-opacity-75 bg-black rounded d-flex flex-column  align-items-center 
         justify-content-center"
        >
          <div>
            <h1 className="display-6 text-white fw-bold fs-1 text-uppercase text-center p-md-0 p-0">
              {desc}
            </h1>
            <h4 className="  text-white align-content-center text-center fs-6 text-uppercase fw-bolder">
              {paragraph}
            </h4>
            <div id="div" className="mt-4 mb-4"></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
