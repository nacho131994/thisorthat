import React, { useEffect, useState } from "react";
//STYLES;
import "../components/Scoreboard.css";

const Scoreboard = () => {
  const [showTen, setShowTen] = useState([]);

  const showOnlyTen = () => {
    let scores = JSON.parse(localStorage.getItem("scoreboard"));
    if (scores === null) {
      scores = [];
    }
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

  if (showTen.length <= 0) {
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
              <p className="modal-titles no-scores">
                THERE ARE NOT ANY SCORES YET. <br /> PLAY SOME ROUNDS!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
                <p className="highest-score">{showTen}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Scoreboard;
