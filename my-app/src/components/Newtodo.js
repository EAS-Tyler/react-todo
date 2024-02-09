import { UserContext } from '../Provider'
import { useContext } from "react";

function Newtodo() {

    const getTodos = useContext(UserContext).getTodos

    function newDo() {
        fetch("api/newtodo/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(() => {
                getTodos()
            })
    }

    return (
        <button onClick={() => newDo()}>Create New Todo</button>
    )
}

export default Newtodo 