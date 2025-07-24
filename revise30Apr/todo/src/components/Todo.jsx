import React, { useState } from 'react'

const Todo = () => {
  const [todos,setTodos]= useState(['code','sleep'])
  const [newTodos,setNewTodos]=useState("")

  const handleChange=(e)=>{
    //  console.log(e.target.value)
    setNewTodos(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTodos([...todos,newTodos])
    setNewTodos("")

  }


  return (
    <div>
      <input
      type='text'
      onChange={handleChange}
      value={newTodos}
      />
      <button onClick={handleSubmit}>Add todo</button>
      <h1>todos:</h1>
      {
        todos.map((todo)=>
          <h2 key={todo}>
            {todo}
          </h2>
        )
      }
    </div>
  )
}

export default Todo
