import React, { useContext } from "react";
import { boardContext } from "./GameBoard";

/**
 * Checks if the game is over with two checks
 * Game is over when the word is guessed correctly
 * Game is over when no more attempts are available and failed to guess the word
 * @returns gameState if over or not
 */
function GameOver() {
  const {
    currAttempt,
    gameOver,
    correctWord,
  } = useContext(boardContext);
  
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word is: {correctWord.toUpperCase()}.</h1>
      {gameOver.guessedWord && (
        <h3>You Guessed in {currAttempt.attempt} Attempts</h3>
      )}
    </div>
  );
}

export default GameOver;