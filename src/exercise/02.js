

/* Exercise 02: useEffect: persistent state */

/* In this exercise, we’re going to enhance our <Greeting /> component 
to get its initial state value from localStorage (if available) and keep 
localStorage updated as the name is updated. */

import React, {useState, useEffect} from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = useState(() => window.localStorage.getItem('name') || initialName)
  
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App


/*
// Extra Credit - Custom Hook
import * as React from 'react'

// Custom Hook
function useLocalStorageStage(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState];
}
function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  const [name, setName] = useLocalStorageStage("name", initialName);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
*/