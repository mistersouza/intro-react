import React, { useState, useEffect } from 'react'

function UserEffectCounter() {
    const [ count, setCount ] = useState(0);
    const [ time, setTime ] = useState(0); 
    
    useEffect(() => {
        document.title = count
    }, [count])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>{count}</button>
            <h2>{time}</h2>
        </div>
  )
}

export default UserEffectCounter