import React from 'react'

export const ConditionalFunctional = ({ connected }) => {
  return (
    <div>
      <h1>{ connected ? 'connected' : 'not connected' }</h1>
    </div>
  )
}

export default ConditionalFunctional