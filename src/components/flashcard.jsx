import React, { useState, useEffect } from "react";

const Flashcard = (props) => {
    const [flipped, setFlipped] = useState(false)

    let color = "blue"
    if (props.difficulty == "medium"){
        color = "yellow"
    }else if (props.difficulty == "hard") {
        color = "red"
    }

    const flip = () => {
        if (!props.guard){
            setFlipped(!flipped)
        }
    }

    useEffect(() => {
        setFlipped(false);
    }, [props.side]);

    return(
        <div className={`flashcard ${color} ${flipped ? 'flipped' : ''}`}
        onClick={flip}>
            <div className="flashcard-front">
                <h5>{props.question}</h5>
            </div>
            <div className="flashcard-back">
                <h5>{props.answer}</h5>
            </div>
        </div>
    )
}

export default Flashcard;