import "../../Styles/Board.css";
import PlayBoard from "./PlayBoard";
import KeyBoard from "./KeyBoard";
import { defaultBoard, getWord } from "./board";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./GameOver";

export const boardContext = createContext();

function GameBoard() {
  /**
   * The following are used to check the game state
   * 1. Sets the board to the current state of 5x6
   * 2. Checks the attemp(row) and letter(correct letter) using useState
   * 3. Creates a new word set for the day
   * 4. Checks if the word is correct and applies the corresponding css
   * 5. Let's the
   */
  const [board, setBoard] = useState(defaultBoard);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() =>{
    getWord().then((words) => {
      setWordSet(words.wordSet)
      setCorrectWord(words.todaysWord)
    })
  },[]);

  

  /**
   *
   * Checks the word in each row
   * If a letter is right allow, perform a check
   * If the word guess is correct, end the game
   */
  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    /**
     * gameOver and word is correct
     */
    
    if (currWord === correctWord.toUpperCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    /**
     * gameOver and word was not guessed correctly
     */
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelectLetter = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setBoard(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="Board">
      <boardContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelectLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver,
        }}
      >
        <div className="game">
          <PlayBoard />
          {gameOver.gameOver ? <GameOver /> : <KeyBoard />}
        </div>
      </boardContext.Provider>
    </div>
  );
}

export default GameBoard;
