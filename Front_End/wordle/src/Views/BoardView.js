import React from 'react'
import GameBoard from '../Components/Board/GameBoard'

function BoardView() {
  var userInfo = localStorage.getItem("userInfo");

  if (userInfo) {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }else{
    return<div className='register'>Please Login to Start Playing!!</div>;
  }

  localStorage.removeItem("userInfo");
  return <div className="register">Logged Out! Login to View Game Board </div>;
}

export default BoardView