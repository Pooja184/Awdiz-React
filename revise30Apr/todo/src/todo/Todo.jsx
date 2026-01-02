import React, { useEffect, useState } from 'react'

const Todo = () => {
const [newTodo,setNewTodo]=useState("");
const [todos,setTodos]=useState([])

    const handleChange=(e)=>{
        console.log(e.target.value)
        setNewTodo(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setTodos([...todos,newTodo])
        localStorage.setItem("todos",JSON.stringify([...todos,newTodo]))
        setNewTodo("");
    }

    const deleteTodo=(idx)=>{
        
        setTodos(todos.filter((_,index)=>index!==idx))
        let rmTodo=todos.filter((_,index)=>index!==idx);
        localStorage.setItem("todos",JSON.stringify(rmTodo))
    }

    useEffect(()=>{
      const savedTodos=JSON.parse(localStorage.getItem("todos"))
      if (savedTodos) {
        setTodos(savedTodos)
      }
    },[])
  return (
    <div>
      <input onChange={handleChange} value={newTodo} type="text" placeholder='add todo' />
      <button onClick={handleSubmit}>Add</button>

      <hr />
      {todos.map((todo,idx)=>(
        <p key={idx}>{todo} <button onClick={()=>deleteTodo(idx)}>delete</button></p>
      ))}
    </div>
  )
}

export default Todo
