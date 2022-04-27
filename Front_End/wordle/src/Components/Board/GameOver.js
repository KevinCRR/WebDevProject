import React, { useContext } from "react";
import { boardContext } from "../../Views/BoardView";

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
      <h1>Correct Word is: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;