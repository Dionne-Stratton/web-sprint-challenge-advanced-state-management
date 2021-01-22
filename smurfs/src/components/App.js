import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchData, addSmurf } from "./actions";
import { connect } from "react-redux";

const App = (props) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
  });

  const [isClicked, setClick] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(form);

    if (isClicked === false) {
      setClick(true);
    } else {
      setClick(false);
    }
  };

  const handleChange = (e) => {
    const newFormData = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(newFormData);
  };

  useEffect(() => {
    props.fetchData();
  }, [isClicked]);

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>

      {props.smurfs.length > 0 &&
        props.smurfs.map((smurfs, i) => (
          <div>
            <p>Name:{props.smurfs[i].name} </p>
            <p>Age:{props.smurfs[i].age}</p>
            <p>Height:{props.smurfs[i].height}</p>
            <br></br>
          </div>
        ))}

      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Your Own Smurf!</h2>

        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="age">
          Age:
          <input
            name="age"
            type="text"
            value={form.age}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="height">
          Height:
          <input
            name="height"
            type="text"
            value={form.height}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          value={isClicked}
          onClick={() => setClick(!isClicked)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurf: state.smurf,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchData, addSmurf })(App);
