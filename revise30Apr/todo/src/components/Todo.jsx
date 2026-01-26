import React, { useState } from 'react'

const Todo = () => {
  const [todos,setTodos]= useState([]);
  const [task,setTask]=useState("");
  const [editId,setEditId]=useState(null);

  const handleAddAndUpdate=(e)=>{
    if (!task.trim())  return

    if (editId) {
      setTodos(todos.map((todo)=>(
        todo.id===editId?{...todo,text:task}:todo
      )))
      setEditId(null)
    }else{
      setTodos([...todos,{id:Date.now(),text:task}])
    }
    setTask("")
  }

  const handleEdit=(todo)=>{
      setTask(todo.text)
      setEditId(todo.id)

  }

  const handleDelete=(idx)=>{
    setTodos(todos.filter((todo)=>todo.id !== idx))
  }

  return (
    <div>
      <input
      type='text'
      onChange={(e)=>setTask(e.target.value)}
      value={task}
      />
      <button onClick={handleAddAndUpdate}>{editId?"update":"Add"}</button>
      <h1>todos:</h1>
      {
        todos.map((todo)=>
       <div key={todo.id}>
        <p>{todo.text} <button onClick={()=>handleEdit(todo)}>Edit</button><button onClick={()=>handleDelete(todo.id)}>Delete</button></p>
       </div>
        )
      }
    </div>
  )
}

export default Todo
