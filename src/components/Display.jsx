const Display = ({ Todos }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center w-full">
      {Todos.map((todo, index) => (
        <div
          key={index}
          className="text-white flex flex-col justify-center w-[90%] bg-white rounded-md border-gray-200 border-2 px-8 mb-4"
        >
          <h2 className="text-black font-bold text-xl mt-4">{todo.Title}</h2>
          <p className="text-black mb-4">{todo.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
