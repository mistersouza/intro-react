import React, { useState, useEffect } from 'react'

function UserEffectCounter() {
    const [ count, setCount ] = useState(0);
    
    useEffect(() => {
        document.title = count
    }, [count])

    return (
    <button onClick={() => setCount(count => count + 1)}>{count}</button>
  )
}

export default UserEffectCounter