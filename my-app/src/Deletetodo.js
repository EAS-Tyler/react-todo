import React, { useState, useEffect } from 'react';

function Deletetodo() {

    const [theTitle, setTheTitle ] = useState( );

    useEffect(() => {
        // deleteToDo()
        // Add any side-effect logic you need here
    }, []);

    function deleteIt() {
        fetch("api/todos", {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ theTitle })
        })
            // .then((response) => response.text())
            // .then((response2) => {
            //     document.getElementById("deletedo").innerText = response2;
            // });
    }



    function deleteToDo() {
        const title = document.getElementById("deltitle").value;
setTheTitle(title)

    }


    function delDo() {
        const deld = document.getElementById("deletedo");
        const delform = `
            <form id="deleteForm">
                <label for="deltitle">Title:</label>
                <br />
                <input type="text" id="deltitle" name="title" required />
                <br />
                <button onClick={deleteToDo}>Delete</button>
            </form>`;
        deld.innerHTML = delform;
    }

    return (
        <div>
            <button onClick={delDo}>Delete Todo</button>
            <div id="deletedo"></div>
        </div>
    );
}

export default Deletetodo;