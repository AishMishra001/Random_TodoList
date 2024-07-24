// parent 
import { useState } from "react";
import React from "react" ; 
import Entry from "./components/Entry"
import Display from "./components/Display"

// import Input from "components/Input.jsx"

function App(){

  const [ Todos , setTodos] = useState([])

  const addTodo = (title,description)=>{
    setTodos([...Todos, { Title: title , Description : description }])
  }

  return(
    <div className="text-white min-h-screen min-w-screen bg-black">
      <h1 className="flex justify-center text-purple-300 font-bold text-5xl pt-4">Todo List</h1>
      <div className="flex justify-center pt-24">
 {/* child 1  */}
      <Entry addTodo={addTodo}/>  
 {/* child 2    */}
      <Display Todos ={Todos}></Display>
      
      </div>
    </div>
  )
}



export default App
