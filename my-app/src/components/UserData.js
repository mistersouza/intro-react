import React from 'react'

function UserData({ isLoaded }) {
  return (
    <div>
        <h1>
            { isLoaded ? (
                'data lodaded'
            ) : (
                'loading...'
            )}       
        </h1>
    </div>
  )
}

export default UserData