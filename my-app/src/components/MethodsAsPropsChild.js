import React from 'react'

function MethodsAsPropsChild(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Confirm your email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in</p>
                    </div>
                )
            }
            <button onClick={() => props.handleLogIn()}>
                {props.isLoggedIn ? 'Log out' : 'Log in' }
            </button>
        </div>
    )
}

export default MethodsAsPropsChild