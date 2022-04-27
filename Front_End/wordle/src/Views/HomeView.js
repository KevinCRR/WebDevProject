import React from 'react'
import logo from "../Assets/wordle_logo.png";
import {Link} from 'react-router-dom'


function HomeView() {
  return (
    <>
      <div className='home'>
          <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo" />
            <p>
              Welcome to a Wordle Clone!!
            </p>
            <p>
              To start playing please login or register to save your scores!!
            </p>
            <Link to='/login'>
              Click Here to Login!
            </Link>
            <Link to='/register'>
              Click Here to Register!
            </Link>
        </header>
      </div>
    </>
  )
}

export default HomeView