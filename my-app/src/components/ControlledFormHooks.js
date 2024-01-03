import React, { useState } from 'react'

function ControlledFormHooks() {
    const [ name, setName ] = useState('');
    const [ category, setCategory ] = useState('webisite'); 
    const [ comments, setComments ] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(name, category, comments)
    }

  return (
    <div>
        <h2>Please fille up the form bellow</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Your name</label>
                <input 
                    type='text'
                    id='name' 
                    name='name' 
                    value={name} 
                    onChange={({ target }) => setName(target.value)}/>
            </div>
            <div>
                <label htmlFor='category'>Query category:</label>
                <select id='id-category' name='category' value={category} onChange={({ target }) => setCategory(target.value)}>
                    <option value='webisite'>Website issue</option>
                    <option value='order'>Order issue</option>
                    <option value='general'>General inquiry</option>
                </select>
            </div>
            <div>
                <label htmlFor='comments'>Comments:</label>
                <textarea id='comments' name='comments' value={comments} onChange={({ target }) => setComments(target.value)}/>
            </div>
            <input type='submit' value='Send' />
        </form>
    </div>
  )
}

export default ControlledFormHooks