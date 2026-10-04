import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Get started</h1>
      <Student />
      <StudentAdderss />
      <Developer />
    </>
  )
}
function StudentAdderss(){
   const person = {
    name: "Ajim",
    age: 25
  };
  return (
    <div className='student'>
      name:{person.name}  <br />
      age:{person.age}
    </div>
  )
}
function Student() {
  return (
    <div>
      <h2>This is a student</h2>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  )
}

function Developer() {
  const developerStyle ={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'20px'
  }
   return(
    <div style={developerStyle}>
      <h3>Developer:</h3>
      <p>Codding:</p>
    </div>
   )
}
export default App
