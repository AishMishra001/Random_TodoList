const Display = ({Todos})=>{
  return(
    <div>
      {Todos.map((todo,index)=>(
        <div key={index} className="bg-white w-[100%] flex flex-col rounded-md border-gray-500">
          <h2 className="text-white">{todo.Title}</h2>
          <p className="text-white">{todo.Description}</p>
        </div>
      ))}
    </div>
  )
}

export default Display ; 