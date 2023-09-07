import React, { useEffect, useState } from "react";
//STYLES;
import "../components/Scoreboard.css";

const Scoreboard = () => {
  const [showTen, setShowTen] = useState([]);

  const showOnlyTen = () => {
    const scores = JSON.parse(localStorage.getItem("scoreboard"));
    if (scores.length <= 10) {
      setShowTen(scores);
    } else {
      setShowTen(scores.slice(scores.length - 10));
    }
    return showTen;
  };

  useEffect(() => {
    showOnlyTen();
  }, []);

  const scores = JSON.parse(localStorage.getItem("scoreboard"));
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-container">
          <div className="modal-header">
            <h1 className="modal-title-scoreboard" id="exampleModalLabel">
              SCOREBOARD
            </h1>
          </div>
          <div className="modal-body">
            <p className="modal-titles">YOUR LAST 10 SCORES:</p>
            <p className="last-ten-scores ">
              {showTen.map((key) => (
                <p>{key}</p>
              ))}
            </p>
            <div className="highest-score-container">
              <p className="modal-titles">YOUR HIGHEST SCORE IS: </p>
              <p className="highest-score">
                {scores.sort()[scores.length - 1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
