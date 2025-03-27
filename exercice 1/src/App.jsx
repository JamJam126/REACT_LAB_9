import React, { useState } from "react";

export default function App() {

  const [score, setScore] = useState("0%");

  const handleChange = (event) => {

    const value = event.target.value;

    if (value >= 0 && value <= 10) {

      setScore(event.target.value + '0%');
    }
  }


  const getScoreBarStyle = () => {
    // 1- Compute width

    const scoreWidth = score

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;


    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={handleChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
