import React, { useState } from "react";
import Delete from "./Delete"; // Import Delete component

const Todo = () => {
  const [todos, setTodos] = useState(["code", "eat"]);
  const [newTodo, setNewTodo] = useState("");


  const [showPopup, setShowPopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const confirmDelete = (idx) => {
    setDeleteIndex(idx); 
    setShowPopup(true); 
  };

  const handleConfirmDelete = () => {
    setTodos(todos.filter((_, index) => index !== deleteIndex));
    setShowPopup(false); 
    setDeleteIndex(null);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="add todo"
        value={newTodo}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>

      {todos.map((todo, idx) => (
        <h2 key={idx}>
          {idx + 1}. {todo}{" "}
          <button onClick={() => confirmDelete(idx)}>Delete</button>
        </h2>
      ))}

      {showPopup && (
        <Delete
          onConfirm={handleConfirmDelete}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default Todo;
