import { useContext } from "react";
import {UserContext} from '../Provider'
import React from "react";

const TodoItem = ({ id, title, description,status}) => {
    const [todos,setTodos] = useContext(UserContext).todos;
    const getTodos = useContext(UserContext).getTodos

    const complButton = <button onClick={() => setComplete(id)}>Complete</button>
    const delButton = <button onClick={() => deleto(id)}>Delete</button>

    const updButton = <button onClick={() => update(id, titleRef.current.innerText, descriptionRef.current.innerText)}>Update</button>
   
    const titleRef = React.createRef()
    const descriptionRef = React.createRef()


    const setComplete = (todoid) => {
        fetch("api/todos/" + todoid, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ todoid })
        })
        .then(() => {
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


    return (
        // <tr><td>{id}</td><td contentEditable >{title}</td><td>{description}</td><td>{complButton}</td><td>{delButton}</td></tr>

 <tr><td>{id}</td><td contentEditable ref={titleRef}>{title}</td><td contentEditable ref={descriptionRef}>{description}</td><td>{status!=='completed' && complButton}</td><td>{status!=='completed' && updButton}</td><td>{delButton}</td></tr> 

 

    )
}

export default TodoItem

{/* <td>{updButton}</td> */ }
{/* <tr><td>{title}</td><td contentEditable ref={titleRef}>{todo.title}</td><td contentEditable ref={descriptionRef}>{todo.description}</td><td>{complButton}</td><td>{updButton}</td><td>{delButton}</td></tr>; */ }

