import React, { useState } from "react";

const Todo1 = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const handleUpdateAndAdd = () => {
    if (!task.trim()) return;

    if (editId) {
      setTodos(todos.map(todo=>

        todo.id === editId ? { ...todo, text: task } : todo
      )
      );
      setEditId(null)
    }else{
      setTodos([
        ...todos,
        {id:Date.now(),text:task}
      ])
    }
    setTask("")
  };

  const handleDelete=(idx)=>{
    setTodos(todos.filter((todo)=>todo.id !==idx))
  }
  const handleEdit=(todo)=>{
    setTask(todo.text)
    setEditId(todo.id)
  }

  return (
    <div className="h-screen flex justify-center items-center bg-black ">
      <div className="h-1/2 sm:w-1/2 p-3 bg-white flex justify-center">
        <div className="mt-8">
          <input
            type="text"
            placeholder="add todo"
            value={task ||""}
            onChange={(e) => setTask(e.target.value)}
            className="outline-none border-2 border-solid border-black  px-2 py-1 mr-2"
          />
          <button
          onClick={handleUpdateAndAdd}
            className="ml-4 bg-gray-800 border-2 border-solid border-black px-4 text-white  py-1"
          >
          {editId?"update":"add"}
          </button>
          <div className="mt-4 h-1/2 ">
            {todos.map((todo) => (
              <p key={todo.id}>
                {todo.text} <button onClick={()=>handleEdit(todo)}>edit</button><button onClick={()=>handleDelete(todo.id)}>delete</button>

              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo1;
