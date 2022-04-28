import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { boardContext } from "./GameBoard";

function KeyBoard() {
  const keyboard1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyboard2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyboard3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { 
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(boardContext);

  /*The function is called when the user uses their physical keyboard*/
  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      //Check the key inputs
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keyboard1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keyboard2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keyboard3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );

  /*The useEffect hook listens for the keyboard event then calls the 
  handleKeyboard Function to execute*/
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  /**
   * This runs to disable/informs users that a letter they chose is not 
   * in the word bank 
   */
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keyboard1.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>

      <div className="line2">
        {keyboard2.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keyboard3.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default KeyBoard;
