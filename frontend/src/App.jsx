import React, { useState } from 'react'

function App() {
  const [name , setName] = useState('');
  const [email, setEmail] = useState('');
  function handelName(e) {
    console.log(e,"eee");
    
    // const {name , value} = e.target

    setName(e.target.value)
    // setEmail(e.target.value.email)
    console.log(name,"name");
    // console.log(email,"email");
  }
  function handelEmail(e) {
    console.log(e,"eee");
    
    // const {name , value} = e.target

    // setName(e.target.value)
    setEmail(e.target.value)
    console.log(email,"email");
    // console.log(email,"email");
  }
  
  return (
    <div>
      <label htmlFor="name">
        Name : <input type="text" 
        value={name}
        onChange={handelName}
        />
      </label>
      <label htmlFor="email">
        Email : <input type="text" 
        value={email}
        onChange={handelEmail}
        />
      </label>
      <p>name is {name} and email is {email}</p>
    </div>
  )
}

export default App
