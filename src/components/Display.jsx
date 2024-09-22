import { useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";

const Display = ({ Todos }) => {
  // Use a state to store which todos are completed (use an object with keys as todo IDs)
  const [completedTodos, setCompletedTodos] = useState({});

  const toggleComplete = (key) => {
    setCompletedTodos((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the specific todo completion state
    }));
  };

  return (
    <div className="text-white flex flex-col justify-center items-center w-full">
      {Todos.map((todo) => {
        const isCompleted = completedTodos[todo.key]; // Check if this specific todo is completed

        return (
          <div
            key={todo.key}
            className={`text-white flex flex-col justify-center w-[90%] ${
              isCompleted ? "bg-gray-500" : "bg-white"
            } rounded-md border-gray-200 border-2 mb-4`}
          >
            <div className="dm-serif-display-regular text-4xl pt-2 flex justify-between items-center">
              {/* Left: # Todo */}
              <h1 className="text-black">#{todo.key} Todo</h1>

              {/* Right: Checkbox */}
              <button
                onClick={() => toggleComplete(todo.key)}
                className="text-black text-2xl cursor-pointer"
              >
                {isCompleted ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
              </button>
            </div>

            <div className="pl-4">
              <h2 className="text-black text-xl mt-4 flex gap-2 items-center">
                <span className="dm-serif-display-regular text-2xl">Title:</span>
                <span className="grenze-gotisch text-2xl">{todo.Title}</span>
              </h2>

              <p className="text-black mb-4 flex gap-2 items-center">
                <span className="dm-serif-display-regular text-2xl">Description:</span>
                <span className="grenze-gotisch m-2 text-2xl">{todo.Description}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
