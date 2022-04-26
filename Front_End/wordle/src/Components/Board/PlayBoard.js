import React, { useState } from 'react'
import { defaultBoard } from '../../Scripts/board'
import LetterBoard from './LetterBoard';

function PlayBoard() {
  
    const[board,setBoard] = useState(defaultBoard);
    return (
    <div className='board'>
        <div className='row'>
            <LetterBoard letterPos={0} attemptNUm={0}/>
            <LetterBoard letterPos={1} attemptNUm={0}/>
            <LetterBoard letterPos={2} attemptNUm={0}/>
            <LetterBoard letterPos={3} attemptNUm={0}/>
            <LetterBoard letterPos={4} attemptNUm={0}/>
        </div>
        <div className='row'>
            <LetterBoard letterPos={0} attemptNUm={1}/>
            <LetterBoard letterPos={1} attemptNUm={1}/>
            <LetterBoard letterPos={2} attemptNUm={1}/>
            <LetterBoard letterPos={3} attemptNUm={1}/>
            <LetterBoard letterPos={4} attemptNUm={1}/>
        </div>
        <div className='row'> 
            <LetterBoard letterPos={0} attemptNUm={2}/>
            <LetterBoard letterPos={1} attemptNUm={2}/>
            <LetterBoard letterPos={2} attemptNUm={2}/>
            <LetterBoard letterPos={3} attemptNUm={2}/>
            <LetterBoard letterPos={4} attemptNUm={2}/>
        </div>
        <div className='row'> 
            <LetterBoard letterPos={0} attemptNUm={3}/>
            <LetterBoard letterPos={1} attemptNUm={3}/>
            <LetterBoard letterPos={2} attemptNUm={3}/>
            <LetterBoard letterPos={3} attemptNUm={3}/>
            <LetterBoard letterPos={4} attemptNUm={3}/>
        </div>
        <div className='row'> 
            <LetterBoard letterPos={0} attemptNUm={4}/>
            <LetterBoard letterPos={1} attemptNUm={4}/>
            <LetterBoard letterPos={2} attemptNUm={4}/>
            <LetterBoard letterPos={3} attemptNUm={4}/>
            <LetterBoard letterPos={4} attemptNUm={4}/>
        </div>
        <div className='row'> 
            <LetterBoard letterPos={0} attemptNUm={5}/>
            <LetterBoard letterPos={1} attemptNUm={5}/>
            <LetterBoard letterPos={2} attemptNUm={5}/>
            <LetterBoard letterPos={3} attemptNUm={5}/>
            <LetterBoard letterPos={4} attemptNUm={5}/>
        </div>
    </div>
  )
}

export default PlayBoard