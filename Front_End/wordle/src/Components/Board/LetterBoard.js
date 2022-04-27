import React, {useContext, useEffect} from 'react'
import {boardContext} from '../../Views/BoardView'

function LetterBoard({letterPos,attemptVal}) {
  const { board, setDisabledLetters, currAttempt, correctWord } = useContext(boardContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

   /**This is called when a letter is checked inside the grid.
    * It checks if it is correct or almost
    * Then marks the letters not in the word bank as disabled
    * It runs whenever a new attempt is made
    */
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
    console.log(letter);
    setDisabledLetters((prev) => [...prev, letter]);
  }
  }, [currAttempt.attempt]);
  return (
  <div className="letter" id={letterState}>
    {letter}
  </div>
  );
}

export default LetterBoard 