import { useState } from 'react'


const INITIALPOOL = [1, 2, 3, 4, 5, 6, 7, 8, 9]


export default function ButtonList() {
    const [numberPool, setNumberPool] = useState(INITIALPOOL)

    const onClick = (e) => {
        setNumberPool(numberPool.filter((n) => n != e.target.value))
    }

    return (
        <div>
            {numberPool.map((n) => <button onClick={onClick}>{n}</button>)}
        </div>
    )
}