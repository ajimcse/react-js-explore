import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Actor'
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
  // const name = "Ajim"
  // const age = 25
  // const city = "Gazipur"
  const actors = ['ajim', 'sorkar', 'babul', 'cabul', 'kabul']
  const singers =[
    {id:1, name:'ajim', age:25},
    {id:2, name:'sorkar', age:35},
    {id:3, name:'kalam', age:20},
    {id:4, name:'abul', age:27}
  ]
  const books =[
    {id:1, name:'Bangle', price:205},
    {id:2, name:'Math', price:345},
    {id:3, name:'English', price:270},
    {id:4, name:'plysice', price:297}
  ]
  return (

    <>
      <h1>Get started</h1>

       <BookStore books={books}></BookStore>
      {/* <Actor name='AJIM SORKAR'  ></Actor> */}
      


      {
       singers.map( singer => <Singer singer={singer}></Singer>)
      }
           
      {/* {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}
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
