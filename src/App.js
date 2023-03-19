import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Rules from "./components/Rules";
import Symbols from "./components/Symbols";

import win from "./sound/win.wav";
import lose from "./sound/lose.wav";
import draw from "./sound/draw.wav";

function App() {
  const [points, setPoints] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(true);
  const [text, setText] = useState("");
  const [winner, setWinner] = useState("");
  const choices = ["rock", "paper", "scissors"];
  let audioWin = new Audio(win);
  let audioLose = new Audio(lose);
  let audioDraw = new Audio(draw);

  // GSAP
  let circle = useRef(null);
  let headerDetails = useRef(null);
  let rulesElem = useRef(null);
  let rulesText = useRef(null);
  let triangleElem = useRef(null);
  let rockElem = useRef(null);
  let paperElem = useRef(null);
  let scissorsElem = useRef(null);

  function randomNum() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  const handleOnClick = (choice) => {
    setUserChoice(choice.currentTarget.id);
    // console.log("user chose", choice.currentTarget.id);
    randomNum();
    setResult(false);
  };

  useEffect(() => {
    // Game Rules
    const comboMoves = userChoice + computerChoice;
    if (
      comboMoves === "scissorspaper" ||
      comboMoves === "rockscissors" ||
      comboMoves === "paperrock"
    ) {
      // Player wins - Point + 1
      setPoints(points + 1);
      setText("You Win");
      setWinner("1");
      audioWin.play();
    }
    if (
      comboMoves === "paperscissors" ||
      comboMoves === "scissorsrock" ||
      comboMoves === "rockpaper"
    ) {
      console.log("minus");
      setPoints(points - 1);
      setText("You Lose");
      setWinner("2");
      audioLose.play();
    }

    if (
      comboMoves === "paperpaper" ||
      comboMoves === "scissorsscissors" ||
      comboMoves === "rockrock"
    ) {
      setText("Draw");
      audioDraw.play();
    }
  }, [computerChoice, userChoice]);

  useEffect(() => {
    // GSAP;

    // Header
    gsap.fromTo(
      circle.current,
      { y: "-100%" },
      { y: 0, duration: 2, delay: 0.2 }
    );
    gsap.fromTo(
      headerDetails.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2.2 }
    );

    // Rules
    gsap.fromTo(
      rulesElem.current,
      { y: "150%", opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 0.2 }
    );
    gsap.fromTo(
      rulesText.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2 }
    );
    // Triangle
    // gsap.fromTo(
    //   triangleElem.current,
    //   { scale: 0 },
    //   { scale: 1, duration: 2, delay: 0.2 }
    // );
    // Symbols
    gsap.fromTo(
      rockElem.current,
      { scale: 0, opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: 2.5,
      }
    );
  }, []);

  function playAgain() {
    setResult(true);
    setComputerChoice("");
    setUserChoice("");
    setWinner("");
  }

  return (
    <div className="App">
      <div className="container">
        <Header points={points} circle={circle} headerDetails={headerDetails} />

        {/* <h2 >koko</h2> */}

        {result ? (
          <Symbols
            handleOnClick={handleOnClick}
            triangleElem={triangleElem}
            scissorsElem={scissorsElem}
            rockElem={rockElem}
            paperElem={paperElem}
          />
        ) : (
          <>
            <div className="result">
              <div
                className={`symbol_circle ${userChoice} ${
                  winner == "1" ? "win" : "lose"
                }`}
              >
                <img src={`../images/${userChoice}.svg`} alt="" />
              </div>
              <div className="content">
                <h2>{text}</h2>
                <button onClick={() => playAgain()}>Play Again</button>
                {/* <button onClick={() => setPoints(points - 1)}>minus</button>
                <button onClick={() => setPoints(points + 1)}>plus</button> */}
              </div>
              <div
                className={`symbol_circle ${computerChoice} ${
                  winner == "2" ? "win" : "lose"
                }`}
              >
                <img src={`../images/${computerChoice}.svg`} alt="" />
              </div>
            </div>
          </>
        )}

        {result ? (
          <Rules result={result} rulesElem={rulesElem} rulesText={rulesText} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
