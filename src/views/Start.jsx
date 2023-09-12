import React, { useState, useEffect } from "react";

import planet from "../images/planeta-tierra.png";
//COMPONENTES
import Scoreboard from "../components/Scoreboard";

const Start = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [showTheGame, setShowTheGame] = useState(false);
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [correctCountryPopulation, setCorrectCountryPopulation] =
    useState(null);
  const [scoreboard, setScoreboard] = useState([]);

  const countriesData = [
    { name: "SPAIN", population: 48.31 },
    { name: "FRANCE", population: 68 },
    { name: "PORTUGAL", population: 10.46 },
    { name: "GERMANY", population: 83.2 },
    { name: "ITALY", population: 59.11 },
    { name: "NORWAY", population: 5.4 },
    { name: "BRAZIL", population: 215.58 },
    { name: "VIETNAM", population: 97.47 },
    { name: "AUSTRALIA", population: 25.76 },
    { name: "SUDAN", population: 45.66 },
    { name: "MOROCCO", population: 37.08 },
    { name: "TUNISSIA", population: 12.26 },
    { name: "VENEZUELA", population: 28.2 },
    { name: "JAPAN", population: 125.5 },
    { name: "RUSSIA", population: 145.55 },
    { name: "CANADA", population: 38.25 },
    { name: "JAMAICA", population: 2.82 },
    { name: "POLAND", population: 37.75 },
    { name: "ENGLAND", population: 55.98 },
    { name: "INDIA", population: 1428.6 },
    { name: "ETHIOPIA", population: 120.3 },
    { name: "IRAQ", population: 43.53 },
    { name: "ARGENTINA", population: 45.81 },
    { name: "CHILE", population: 19.49 },
    { name: "SWEEDEN", population: 10.42 },
    { name: "UNITED STATES", population: 339.99 },
    { name: "COLOMBIA", population: 51.6 },
    { name: "BANGLADESH", population: 169.84 },
    { name: "SOUTH KOREA", population: 51.43 },
    { name: "INDONESIA", population: 277.53 },
    { name: "MEXICO", population: 129.32 },
    { name: "ANGOLA", population: 34.5 },
    { name: "GREECE", population: 10.39 },
    { name: "FINLAND", population: 5.56 },
    { name: "BOLIVIA", population: 12.3 },
    { name: "NETHERLANDS", population: 17.81 },
    { name: "CROATIA", population: 3.85 },
    { name: "ARGELIA", population: 44.17 },
    { name: "CAMEROON", population: 26.54 },
    { name: "EGYPT", population: 102.1 },
    { name: "KENIA", population: 53.0 },
    { name: "NIGERIA", population: 223.8 },
    { name: "BANGLADESH", population: 172.95 },
    { name: "SENEGAL", population: 16.87 },
    { name: "SOUTH AFRICA ", population: 61.3 },
    { name: "ZAMBIA", population: 19.83 },
    { name: "URUGUAY", population: 3.42 },
    { name: "ECUADOR", population: 17.51 },
    { name: "HONDURAS", population: 9.7 },
    { name: "CUBA", population: 11.08 },
    { name: "PANAMA", population: 4.2 },
    { name: "SURINAM", population: 0.634 },
    { name: "COSTA RICA", population: 5.26 },
    { name: "DOMINICAN REPUBLIC", population: 11.11 },
    { name: "THAILAND", population: 69.95 },
    { name: "SINGAPORE", population: 5.63 },
    { name: "PHILIPINES", population: 111.57 },
    { name: "MALAYSIA", population: 30 },
    { name: "SAUDI ARABIA", population: 34.11 },
    { name: "IRAN", population: 84.84 },
    { name: "PAKISTAN", population: 240 },
    { name: "TAIWAN", population: 23.94 },
    { name: " UAE", population: 10.39 },
    { name: "KUWAIT", population: 5.02 },
    { name: "BAHREIN", population: 1.78 },
    { name: "MONGOLIA", population: 3.46 },
    { name: "ARMENIA", population: 0.307 },
    { name: "NEW ZELAND", population: 4.93 },
    { name: "SWITZERLAND", population: 8.81 },
    { name: "BELGIUM", population: 11.84 },
    { name: "AUSTRIA", population: 9.02 },
    { name: "DENMARK", population: 5.92 },
    { name: "ROMANIA", population: 19.05 },
    { name: "IRELAND", population: 5.19 },
    { name: "CZECH REPUBLIC", population: 10.85 },
    { name: "BULGARIA", population: 6.44 },
    { name: "SERBIA", population: 6.87 },
    { name: "HUNGARY", population: 9.59 },
  ];
  //-----------------------------------------------------------------------------------------------------------------
  const handleShowTheGame = () => {
    setShowTheGame(true);
    setShowPlayButton(false);
  };
  //-----------------------------------------------------------------------------------------------------------------
  const getRandomIndex = (excludeIndex) => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * countriesData.length);
    } while (randomIndex === excludeIndex);
    return randomIndex;
  };
  //-----------------------------------------------------------------------------------------------------------------
  const generateRandomCountries = () => {
    const randomIndex1 = getRandomIndex(-1);
    const randomIndex2 = getRandomIndex(randomIndex1);

    setCountry1(countriesData[randomIndex1]);
    setCountry2(countriesData[randomIndex2]);

    setCorrectAnswer(
      countriesData[randomIndex1].population >
        countriesData[randomIndex2].population
        ? "country1"
        : "country2"
    );
    setShowCorrectMessage(false);
  };
  //-----------------------------------------------------------------------------------------------------------------
  const handleChoice = (chosen) => {
    if (chosen === correctAnswer) {
      setScore(score + 1);
      setCorrectCountryPopulation(
        correctAnswer === "country1"
          ? `${country1.name}: ${country1.population} million`
          : `${country2.name}: ${country2.population} million`
      );

      setShowCorrectMessage(true);
      setTimeout(() => {
        generateRandomCountries();
        setShowCorrectMessage(false);
        setCorrectCountryPopulation(null);
      }, 2000);
    } else {
      setGameOver(true);
    }
  };
  //-----------------------------------------------------------------------------------------------------------------
  const handleRestart = () => {
    setGameOver(false);
    generateRandomCountries();

    setScore(0);
  };
  //-----------------------------------------------------------------------------------------------------------------

  const loadScoreboard = () => {
    let localStorgeData = JSON.parse(localStorage.getItem("scoreboard"));
    setScoreboard(localStorgeData !== null ? localStorgeData : []);
  };
  //-----------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    loadScoreboard();
    generateRandomCountries();
  }, []);

  useEffect(() => {
    if (gameOver) {
      scoreboard.push(score);
      setScoreboard([...scoreboard]);
      localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
    }
  }, [gameOver]);
  //-----------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="app-container">
        <div className="banner">
          <h1 className="title"> WHICH COUNTRY HAS THE HIGHEST POPULATION?</h1>
          <img src={planet} alt="planet" className="planet-icon" />
        </div>
        {showPlayButton && (
          <>
            <button className="play-button" onClick={handleShowTheGame}>
              Play
            </button>
            <button
              type="button"
              className="scoreboard-button-start-of-the-game"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              SHOW SCOREBOARD
            </button>

            <Scoreboard />
          </>
        )}
        {!showTheGame ? (
          " "
        ) : !gameOver ? (
          <div>
            {score === 0 ? (
              <>
                {" "}
                <div className="show-scoreboard-section">
                  <button
                    type="button"
                    className="show-scoreboard-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    SHOW SCOREBOARD
                  </button>
                </div>
                <Scoreboard />
              </>
            ) : null}
            <div className="country-options">
              {["country1", "country2"].map((country) => (
                <button
                  className="country-button"
                  key={country}
                  onClick={() => handleChoice(country)}
                >
                  {country === "country1" ? country1.name : country2.name}
                </button>
              ))}
            </div>
            {showCorrectMessage && <p className="correct">CORRECT!</p>}
            {correctCountryPopulation && (
              <p className="correct-population">{correctCountryPopulation}</p>
            )}
            <p className="score">SCORE: {score}</p>
          </div>
        ) : (
          <div>
            <h1 className="game-over">
              <p>GAME OVER</p>
            </h1>
            <p className="your-final-score">YOUR FINAL SCORE: </p>
            <p className="final-score-number">{score}</p>
            <div className="end-of-the-game-buttons">
              <button onClick={handleRestart} className="restart-button">
                Restart Game
              </button>

              <button
                type="button"
                className="show-scoreboard-button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                SHOW SCOREBOARD
              </button>
            </div>
            <Scoreboard />
          </div>
        )}
      </div>
    </>
  );
};

export default Start;
