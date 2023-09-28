import { useState } from 'react'

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Dice() {
    const [result, setResult] = useState(0)

    const onClick = (e) => {
        let diceA = getRandomNumber(1, 6)
        let diceB = getRandomNumber(1, 6)
        setResult(diceA + diceB)
    }


    return (
        <div className='dice'>
            <h1 className="ripple">Dice result: {result}</h1>
            <button className='button active' onClick={onClick}>roll the dice!</button>
        </div>
    )
};