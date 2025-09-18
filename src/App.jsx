import React, { useState } from "react";
import "./App.css";

function App() {
  // State
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // BMI Logic
  let calBmi = (e) => {
    e.preventDefault();

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
      alert("Please enter a valid Weight and Height");
    } else {
      // Convert height from feet → meters
      let heightInMeters = height * 0.3048;

      // Calculate BMI
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are a healthy weight person");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  // Reload
  let reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight (Kg)</label>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (Ft)</label>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="message">
            {bmi && (
              <>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
