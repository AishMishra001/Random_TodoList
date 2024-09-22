import { useState } from "react";

const Entry = ({Todos,setTodos})=>{

  const [title , setTitle] = useState("") ; 
  const [description , setDescription] = useState("") ; 


  const addTodoHandle = (title,description)=>{
    const key = Todos.length + 1 ; 
    setTodos([...Todos, { Title: title , Description : description , key : key }])
  }
 

  return(
    <div className="text-white flex flex-col justify-center w-[90%] bg-white rounded-md border-gray-200 border-2 px-8 mb-2">
      <div className="text-black dm-serif-display-regular text-4xl mb-2 mt-4 ">
        Entry Todos
      </div>
      <div>
        <input 
        onChange={
          (e)=>{
            setTitle(e.target.value)
          }
        } 
           type="text"  placeholder="Title" className="my-4 w-[100%] rounded-md px-4 py-2 bg-black " />
        <input
        onChange={
          (e)=>{
            setDescription(e.target.value)
          }
        }
         type="text" placeholder="Description" className="my-4 w-[100%] rounded-md px-4 py-2 bg-black" />

         <button className="bg-black px-4 py-2 rounded-lg mt-2 mb-4" onClick={ ()=>
           addTodoHandle(title ,description)
         }>
          Add
         </button>
         </div>
    </div>
  )
}



export default Entry ; 

/*
[
  {
    Title: "Title 1",
    Description: "Description 1"
  },
  {
    Title: "Title 2",
    Description: "Description 2"
  } , 
  {
    Title: "Title 3",
    Description: "Description 3"
  }
]
*/