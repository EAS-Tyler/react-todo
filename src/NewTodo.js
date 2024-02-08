

function NewTodo() {
    //     function postTodo() {
    //         fetch("http://localhost:3000/todos", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ title, description })
    //         }).then((response) => response.text())
    //             .then((response2) => {
    //                 document.getElementById("newtodo").innerText = response2
    //                 getAllTodo()
    //             })
    //     }

    // function postTodo() {
    //     const title = document.getElementById("title").value
    //     const description = document.getElementById("description").value
    //     fetch("http://localhost:3000/todos", {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ title, description })
    //     }).then((response) => response.text())
    //         .then((response2) => {
    //             document.getElementById("newtodo").innerText = response2
    //             // getAllTodo()
    //         })
    // }

    function newTodo() {

        return (
            <form id="todoForm">
                <label for="title">Title:</label>
                  <input type="text" id="title" name="title" required/>
                            <label for="description">Description:</label>
                                <textarea id="description" name="description" required></textarea>

                                    <button type="button" onclick="${postTodo()}">Create Todo</button>

                                    <div id="postdo"></div>
                                </form>
                                )
}
                                return (
                                <div>
                                    <button onClick={() => newTodo()}>New Todo</button>
                                </div>
                                )

}


                                export default NewTodo