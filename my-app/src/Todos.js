
import React, { useState, useEffect } from 'react';


function Todos({ url, name }) {

  const [todos, setTodos] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    console.log("run use effect")
    getTodos()
  }, []);
  // added todos into dependancies, as i want useeffect to run (to call getTodos and update table), but the useffect runs many times really fast - does not matter as getTodos is called after other functions 

  const setComplete = (todoid) => {
    fetch("api/todos/" + todoid, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ todoid })
    }).then(() => {
      getTodos()
    })
  }

  function getTodos() {
    fetch("api/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data)
      })
  }

  function update(todoid, title, description) {
    fetch("api/todos/" + todoid, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    }).then(() => {
      getTodos()
    })
  }

  function newDo() {
    fetch("api/newtodo/" , {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        // body: JSON.stringify({ title, description })
      }).then(() => {
        getTodos()
      })
}

  function deleto(id) {
    fetch("api/todos", {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
      .then(() => {
        getTodos()
      })
  }

  return (
    <div>
      <h1>Todo list</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            {/* <th>Completed</th>
            <th>Update</th> */}
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            const titleRef = React.createRef()
            const descriptionRef = React.createRef()
            const complButton = <button onClick={() => setComplete(todo.id)}>Complete</button>
            const updButton = <button onClick={() => update(todo.id, titleRef.current.innerText, descriptionRef.current.innerText)}>Update</button>
            const delButton = <button onClick={() => deleto(todo.id)}>Delete</button>
            return <tr><td>{todo.id}</td><td contentEditable ref={titleRef}>{todo.title}</td><td contentEditable ref={descriptionRef}>{todo.description}</td><td>{complButton}</td><td>{updButton}</td><td>{delButton}</td></tr>;
          })
          }
        </tbody>
      </table>

      <button onClick={() => newDo()}>Create New Todo</button>
<div id="completeddos"></div>

      
    </div>
  )
}

export default Todos