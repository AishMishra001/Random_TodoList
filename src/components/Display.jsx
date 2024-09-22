const Display = ({ Todos }) => {
  return (
    <div className="text-white flex flex-col justify-center items-center w-full">
      {Todos.map((todo) => (
        <div
          key={todo.key} // Add a key prop to uniquely identify each todo item
          className="text-white flex flex-col justify-center w-[90%] bg-white rounded-md border-gray-200 border-2 mb-4"
        >
          <div className="dm-serif-display-regular text-4xl pt-2">
            <h1 className="text-black">#{todo.key} Todo</h1>
          </div>
          <div className="pl-4">
            <h2 className="text-black text-xl mt-4 flex gap-2 items-center">
              <span className="dm-serif-display-regular text-2xl">Title:</span>
              <span className="grenze-gotisch text-2xl">
                {todo.Title}
              </span>
            </h2>

            <p className="text-black mb-4 flex gap-2 items-center">
              <span className="dm-serif-display-regular text-2xl">Description:</span>
              <span className="grenze-gotisch m-2 text-2xl">{todo.Description}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
