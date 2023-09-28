import { useState } from 'react'


const INITIALPOOL = {
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
}

export default function ButtonList() {
    const [numberPool, setNumberPool] = useState(INITIALPOOL)

    const onClick = (n) => {
        let newNums = { ...numberPool }
        newNums[n] = false
        setNumberPool(newNums)
        // console.log(newNums)
    }

    return (
        <div className="button-list">
            <div>
                {Object.entries(numberPool).map((n) => {
                    if (n[1]) {
                        return (<button className="button active" onClick={() => onClick(n[0])}>{n[0]}</button>)
                    }
                    else {
                        return (<button className="button disabled">{n[0]}</button>)
                    }

                })}
            </div>
            <button className='button active' onClick={() => setNumberPool(INITIALPOOL)}>RESET</button>
        </div>

    )
}