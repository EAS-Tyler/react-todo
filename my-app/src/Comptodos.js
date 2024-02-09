import React, { useState, useEffect } from "react";

function Comptodos() {
    const [comptodos, setcomptodos] = useState([])
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        getAllCompTodo()
        // console.log(comptodos)
    }, []);

    const compall = document.getElementById("completeddos")

    function toggleCompletedTodos() {
        const isVisible = compall.style.display === "block"
        if (isVisible) {
            compall.style.display = "none"
        } else {
            compall.style.display = "block"
            addTable()     // new function 
        }
    }

    function deleto(id) {
        fetch("api/todos", {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ id })
        })
      }

    //   <button onClick={() => toggleCompletedTodos()}>Show/Hide completed Todos</button>

//     function addTable() {
//         const tableRows = comptodos.map((todo) => {
//             const delButton = <button onClick={() => deleto(todo.id)}>Delete</button>
//             return `<tr><td>${todo.id}</td><td>${todo.title}</td><td>${todo.description}</td><td>${delButton}</td></tr>`;
//         })
//         const table = `<h3>Completed Todos</h3>
//         <table>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Description</th>
//                 </tr>
//  <tbody>
//   ${tableRows.join('')} 
//                 </tbody>
//             </thead>
//         </table>`
//         compall.innerHTML = table
//     }

   function addTable() {
        const tableRows = comptodos.map((todo) => {
            const delButton = <button onClick={() => deleto(todo.id)}>Delete</button>
            return `<tr><td>${todo.id}</td><td>${todo.title}</td><td>${todo.description}</td><td>${delButton}</td></tr>`;
        })
        const table = `<h3>Completed Todos</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
 <tbody>
  ${tableRows.join('')} 
                </tbody>
            </thead>
        </table>`
        compall.innerHTML = table
    }


    function getAllCompTodo() {
        fetch("api/comptodos")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setcomptodos(data)
                console.log(comptodos)
            })
        //     //  .then(() => {
        // getTodos()
    // })
    }

    return (
        <div>
            <button onClick={() => toggleCompletedTodos()}>Show/Hide completed Todos</button>
            <div id="completeddos"></div>

<button onClick={() => setToggle(!toggle)}>Show Deleted Todos</button>
  {toggle && <div>the table</div>}
        </div>
        
    )
}

export default Comptodos