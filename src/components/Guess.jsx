import React, { useState } from "react";

const Guess = (props) => {
    const [guess, setGuess] = useState('')

    return (
        <div className="button-row">
            <input
                type="text"
                name="field"
                value={guess}
                placeholder="Guess the answer"
                onChange= {(e) => {setGuess(e.target.value)}}
                className = "textbox"
            />
            <button onClick={() => {
                props.checkAnswer(guess)
                setGuess('')
            }}
            >Submit</button>
        </div>
    )
}

export default Guess;