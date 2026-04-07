import { useState } from 'react'


import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [count1, setComputerChoice] = useState(0)

  let rockPaperScissors = (userChoice) => {
    let choices = ['rock', 'paper', 'scissors']
    let computerChoice = choices[Math.floor(Math.random() * 3)]
    if (userChoice == 'rock' && computerChoice == 'scissors') {
      setCount(count + 1)
    }
    else if (userChoice == 'paper' && computerChoice == 'rock') {
      setCount(count + 1)
    }
    else if (userChoice == 'scissors' && computerChoice == 'paper') {
      setCount(count + 1)
    }
    else if (userChoice == computerChoice) {
      setCount(count)
    }
    else {
      setComputerChoice(count1 + 1)
    }
  }
  return (
    <div>
      <h1 name="title">Rock Paper Scissors</h1>
      <h1 name="players">Computer : You</h1>
      <p name="scores">{count1} : {count}</p>
      <button onClick={() => rockPaperScissors('rock')}>🪨</button>
      <button onClick={() => rockPaperScissors('paper')}>📄</button>
      <button onClick={() => rockPaperScissors('scissors')}>✂️</button>
    </div>
  )

}

export default App
