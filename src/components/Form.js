import React, { useState } from "react";

const Form = ({ data, setData, setSearch }) => {
  const [error, setError] = useState(false);

  //Extract
  const { city, country } = data;

  //Read and Set
  const handleChange = (e) => {
    //update state
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    if (country.trim() === "" || city.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //
    setSearch(true)
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All fields are required</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">Select a Country</option>
          <option value="ES">España</option>
          <option value="FR">France</option>
          <option value="BE">Belgium</option>
          <option value="IT">Italy</option>
          <option value="DE">Germany</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Search"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Form;
<h1>Form</h1>;
