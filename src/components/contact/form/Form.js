import React, { useState, useReducer } from "react";
// import { Form,Button } from 'react-bootstrap'
import SubTitle from "../../SubTitle";

const reducer = (state, action) => {
  if (action.type === "ADD_INFO") {
    let newInfo = [...state.people, action.payload];
    return { ...state, people: newInfo };
  }
};
const dft = {
  people: [],
};
const FormComponent = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, dispatch] = useReducer(reducer, dft);
  const handleChange = (e) => {
    const inpN = e.target.name;
    let inpV = e.target.value;
    if (inpV) {
      setInfo({ ...info, [inpN]: inpV });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info) {
      let person = { ...info };
      dispatch({ type: "ADD_INFO", payload: person });
      const inpN = e.target.value;
      setInfo({ [inpN]: "" });
    }
  };
  return (
    <div className="right">
      <SubTitle title="send us an email" />
      <div className="feedBack">
        {" "}
        <p className="success">success message</p>
      </div>
      <form onSubmit={handleSubmit} className="border p-3">
        <div className="row">
          <div className="col-md-6 form-group">
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
                value={state.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              value={state.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <label>Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            value={state.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <label>Message:</label>
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required
            value={state.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center my-4">
          {" "}
          <button
            type="submit"
            className="form-control rounded-pill w-75 w-md-50 btn-outline-info bg-transparent text-primary mx-auto fs-6 fs-md-3 fw-bold"
          >
            Send Message
          </button>
        </div>
      </form>
      {state.people.map((person, i) => {
        const { name, email, message } = person;
        return (
          <div key={i}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{message}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default FormComponent;
