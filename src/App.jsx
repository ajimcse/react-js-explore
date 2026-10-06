import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {
  const [count, setCount] = useState(0)
  // const name = "Ajim"
  // const age = 25
  // const city = "Gazipur"
  const actors = ['ajim', 'sorkar', 'babul', 'cabul', 'kabul']
  return (

    <>
      <h1>Get started</h1>


      <Actor name='AJIM SORKAR'  ></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task='learn React'
       isDane={true}
       />
      <Todo task='jsx'
       isDane={false}
       /> */}



      {/* <Student />
      <StudentAdderss />
      <Developer /> */}

      {/* <Student name="Ajim" Age='25' />
      <Student name="Sojib" Age='20' />
      <Student name="Mamun" Age='30' /> */}
    </>
  )
}
// function Student (props){
//   console.log(props)
//   return(
//     <h1> NaMe:{props.name}Age:{props.Age}</h1>
//   )
// }
// function StudentAdderss(){
//    const person = {
//     name: "Ajim",
//     age: 25
//   };
//   return (
//     <div className='student'>
//       name:{person.name}  <br />
//       age:{person.age}
//     </div>
//   )
// }
// function Student() {
//   return (
//     <div>
//       <h2>This is a student</h2>
//       <p>Name:</p>
//       <p>Age:</p>
//     </div>
//   )
// }

// function Developer() {
//   const developerStyle ={
//     margin:'20px',
//     padding:'20px',
//     border:'2px solid purple',
//     borderRadius:'20px'
//   }
//    return(
//     <div style={developerStyle}>
//       <h3>Developer:</h3>
//       <p>Codding:</p>
//     </div>
//    )
// }
export default App
