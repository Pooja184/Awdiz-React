import React, { useState } from 'react'

const Todo = () => {
    const [todos,setTodos]=useState([]);
    const [newTodo,setNewTodo]=useState('');

    const handleChange=(e)=>{
        setNewTodo(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([...todos,newTodo])
        setNewTodo("")
    }
    const deleteTodo=(index)=>{
        setTodos(todos.filter((_,idx)=>idx !== index))
    }
  return (
    <>
      <form>
        <input type="text" value={newTodo} onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Add</button>
      </form>
      {
        todos.map((todo,idx)=>(
            <li key={idx}>{todo} <button onClick={()=>deleteTodo(idx)}>Delete</button></li>
        ))
      }
    </>
  )
}

export default Todo
