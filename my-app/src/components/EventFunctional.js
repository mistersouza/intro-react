import React from 'react'

function EventFunctional() {

    function handleClick() {
        console.log('Functional component cliked');
    }
  return (
    <button onClick={handleClick}>click me - functional component</button>
  )
}

export default EventFunctional