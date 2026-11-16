import Die from './Die'
import Confetti from './Confetti'
import { useState, useEffect, useRef } from 'react'

export default function App() {

  const [dice, setDice] = useState(() => generateAllNewDice())

  const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

  const buttonRef = useRef(null)

  useEffect(() => {
    if(gameWon) {
      buttonRef.current.focus()
    }
  },[gameWon])
 
  function generateAllNewDice() {
    return new Array(10) 
              .fill(0)
              .map(() => ({
                value:  Math.ceil(Math.random() * 6),
                isHeld: false,
                id : Math.floor(Math.random() * 10000)
              }))
  }

  function hold(id) {
    setDice((prevDice) => prevDice.map( die => {
      return die.id === id ? {...die, isHeld : !die.isHeld} : die
    }
    ))
  }

  function rollDice() {
    setDice((prevDice) => prevDice.map(die => {
      return die.isHeld === false ? { ...die, value : Math.ceil(Math.random() * 6) } : die 
    }
    ))
  }

  function newGame() {
    setDice(() => generateAllNewDice())
  }
  
  const diceElements = dice.map(dieObj => < Die value={dieObj.value} isHeld={dieObj.isHeld} hold={() => hold(dieObj.id)} />) 

  return (
    <main>
      {  gameWon && < Confetti /> }
      <div aria-live="polite" className="sr-only">
          { gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p> }
      </div>
      <h1 className="title">Tenzies</h1>
      { gameWon ? <h2>You Won Game!</h2>  : <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> }
      <div className="dice-container">
        {diceElements}
      </div>
      <button ref={buttonRef} className="roll-dice" onClick={gameWon ? newGame : rollDice}>
        { gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  )
}


