import React, { useContext } from "react";
import { ProdsContext } from "./Context";
import Title from "./Title";

const RoomsFilter = () => {
  let context = useContext(ProdsContext);
  let { prods, handleFilter, type, minSize, maxSize, capacity } = context;
  const getUnique = (prods, val) => {
    return [...new Set(prods.map((prod) => prod[val]))];
  };
  //get unique types
  let types = getUnique(prods, "type");
  types = ["all", ...types];

  let options = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  //get unique types
  let people = getUnique(prods, "capacity");
  let peopleOptions = people.map((person, i) => {
    return (
      <option key={i} value={person}>
        {person}
      </option>
    );
  });

  return (
    <div>
      <Title title="filter rooms " />
      <form className="form  m-4 d-flex flex-column flex-lg-row align-items-center justify-content-center ">
        {/* select by type */}
        <div className="form-group   p-3">
          <label className="form-label" htmlFor="type">
            Type
          </label>
          <select
            className="form-select"
            name="type"
            id="type"
            value={type}
            onChange={handleFilter}
          >
            {options}
          </select>
        </div>
        {/* select by type */}
        {/* select by no of guests */}
        <div className="form-group  flex-grow-1 flex-flex-shrink-1 p-3">
          <label className="form-label" htmlFor="Guests">
            No. of Guests
          </label>
          <select
            className="form-select"
            name="capacity"
            id="type"
            value={capacity}
            onChange={handleFilter}
          >
            {peopleOptions}
          </select>
        </div>
        {/* select by no of guests */}
        {/* select by no of guests */}
        <div className="form-group flex-grow-1 flex-flex-shrink-1 p-3">
          <label htmlFor="price">room size(From-To) </label>
          <div className="">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleFilter}
              className="form-control"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleFilter}
              className="form-control"
            />
          </div>
        </div>
        {/* select by no of guests */}
      </form>
    </div>
  );
};

export default RoomsFilter;
