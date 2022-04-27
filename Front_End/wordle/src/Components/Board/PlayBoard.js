import React from "react";
import LetterBoard from './LetterBoard'

function PlayBoard() {
  return (
    <div className="board">
      <div className="row">
        <LetterBoard letterPos={0} attemptVal={0} />
        <LetterBoard letterPos={1} attemptVal={0} />
        <LetterBoard letterPos={2} attemptVal={0} />
        <LetterBoard letterPos={3} attemptVal={0} />
        <LetterBoard letterPos={4} attemptVal={0} />
      </div>
      <div className="row">
        <LetterBoard letterPos={0} attemptVal={1} />
        <LetterBoard letterPos={1} attemptVal={1} />
        <LetterBoard letterPos={2} attemptVal={1} />
        <LetterBoard letterPos={3} attemptVal={1} />
        <LetterBoard letterPos={4} attemptVal={1} />
      </div>
      <div className="row">
        <LetterBoard letterPos={0} attemptVal={2} />
        <LetterBoard letterPos={1} attemptVal={2} />
        <LetterBoard letterPos={2} attemptVal={2} />
        <LetterBoard letterPos={3} attemptVal={2} />
        <LetterBoard letterPos={4} attemptVal={2} />
      </div>
      <div className="row">
        <LetterBoard letterPos={0} attemptVal={3} />
        <LetterBoard letterPos={1} attemptVal={3} />
        <LetterBoard letterPos={2} attemptVal={3} />
        <LetterBoard letterPos={3} attemptVal={3} />
        <LetterBoard letterPos={4} attemptVal={3} />
      </div>
      <div className="row">
        <LetterBoard letterPos={0} attemptVal={4} />
        <LetterBoard letterPos={1} attemptVal={4} />
        <LetterBoard letterPos={2} attemptVal={4} />
        <LetterBoard letterPos={3} attemptVal={4} />
        <LetterBoard letterPos={4} attemptVal={4} />
      </div>
      <div className="row">
        <LetterBoard letterPos={0} attemptVal={5} />
        <LetterBoard letterPos={1} attemptVal={5} />
        <LetterBoard letterPos={2} attemptVal={5} />
        <LetterBoard letterPos={3} attemptVal={5} />
        <LetterBoard letterPos={4} attemptVal={5} />
      </div>
    </div>
  );
}

export default PlayBoard;
