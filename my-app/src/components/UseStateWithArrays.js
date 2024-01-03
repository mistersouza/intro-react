import React, { useState } from 'react'

function UseStateWithArrays() {
    const [ numbers, setNumbers ] = useState([1, 2, 3])

    const addNumbers = () => setNumbers([...numbers, numbers.length + 1])
    const removeLastNumber = () => setNumbers([...numbers.filter(number => number !== numbers[numbers.length -1])])
  return (
    <div>
        <button onClick={addNumbers}>Add item</button>
        <button onClick={removeLastNumber}>Remove last number</button>
        <ul>
            {numbers.map(number => <li key={number}>{number}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays