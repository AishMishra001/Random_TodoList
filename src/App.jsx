// parent 
import { useState } from "react";
import React from "react" ; 
import Entry from "./components/Entry" ; 
import Display from "./components/Display" ; 
import "./index.css" ; 

// import Input from "components/Input.jsx"

function App(){

  const [ Todos , setTodos] = useState([])

 

  return(
    <div className="text-white min-h-screen min-w-screen bg-black">
      <h1 className="flex justify-center text-white font-bold text-5xl pt-4 dm-serif-display-regular">Todo List</h1>
      <div className="flex flex-col gap-2 justify-center pt-24 items-center w-full">
 {/* child 1  */}
      <Entry Todos={Todos} setTodos={setTodos}/>  
 {/* child 2    */}
      <Display Todos ={Todos}></Display>
      
      </div>
    </div>
  )
}



export default App
