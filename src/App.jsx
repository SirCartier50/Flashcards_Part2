import './App.css';
import { useState } from 'react';
import Flashcard from './components/flashcard';
import Guess from './components/Guess';

const App = () => {
  const [count, setCount] = useState(0);
  const [questionSide, setQuestionSide] = useState(false);
  const [guard, setGuard] = useState(true)
  const [isIncorrect, setIsIncorrect] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const flashcards = [{'easy':['What is the closest planet to the Sun?', 'Mercury']}, {'easy':["What's the name of our star?", "Sun"]}, {'medium':["What phenomenon causes the red appearance of Mars?", "Iron Oxide/rust"]}, {'medium':["What is the name of the galaxy that contains our Solar System?", "Milky Way"]}, {'hard':["What is the term for the boundary around a black hole beyond which no light or matter can escape?", "Event Horizon"]}, {'hard':["What is the name of the nearest star system to Earth, located about 4.37 light-years away?", "Alpha Centauri"]}]

  const rando = () => {
    while(true){
      let rand = Math.floor(Math.random() * 5)
      if (rand == count){
        continue
      }else{
        return rand
      }
    }
  }
  const shuffle = () => {
    setCount(rando())
    setIsIncorrect(false)
    setQuestionSide(!questionSide)
    setIsCorrect(false)
    setGuard(true)
  }
  const next = () => {
    if (count < flashcards.length - 1){
      setCount(count + 1)
      setIsIncorrect(false)
      setQuestionSide(!questionSide)
      setGuard(true)
      setIsCorrect(false)
    }
  }
  const previous = () => {
    if (count > 0){
      setCount(count - 1)
      setIsIncorrect(false)
      setQuestionSide(!questionSide)
      setGuard(true)
      setIsCorrect(false)
    }
  }

  const checkAnswer = (answer) => {
    setIsIncorrect(true)
    setIsCorrect(false)
    if (answer == (Object.entries(flashcards[count]))[0][1][1]){
      setIsIncorrect(false)
      setGuard(false)
      setIsCorrect(true)
    }else{
      setIsIncorrect(true)
      setIsCorrect(false)
      
    }
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Flashcards in Space</h1>
        <h2>flashcards about general topics of space</h2>
        <h2>Number of Cards: 6</h2>
        <Flashcard difficulty = {(Object.entries(flashcards[count]))[0][0]} question = {(Object.entries(flashcards[count]))[0][1][0]} answer={(Object.entries(flashcards[count]))[0][1][1]} side = {questionSide} guard={guard}/>
      </div>
      <div className='button-row'>
        {isIncorrect &&  <p>Incorrect! Try Again</p>}
        {isCorrect && <p>Correct! Good Job!</p>}
      </div>
      <Guess checkAnswer={checkAnswer}/>
      <div className='button-row'>
        <div className ="button-container">
          <button onClick={previous}>prev</button>
        </div>
        <div className ="button-container">
          <button onClick={next}>next</button>
        </div>
        <div className ="button-container">
        <button onClick={shuffle}>Shuffle</button>
      </div>
      </div>
    </div>
  )
}

export default App
