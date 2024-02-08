import { createContext, useState } from 'react'
const UserContext = createContext();

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([])
  // fetch("http://backend-service.k8react.svc.cluster.local:3000/todos")
  // fetch("http://backend-service.k8react:3000/todos")
  //     fetch("http://127.0.0.1:61606/todos")    -- works, only when minikube service backend-service --url -n k8react  and open in termiinal
  // fetch("http://backend-service:3000/todos")
  //     fetch("http://backend-service.k8react.svc.minikube:3000/todos")
  //     fetch("http://10.97.81.5:3000/todos")
  //     fetch("http://backend-service.k8react.svc:3000/todos")


  const getTodos = () => {
    fetch("/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data)
      })

    console.log(todos)
  }

  return (<UserContext.Provider value={{ todos: [todos, setTodos], getTodos: getTodos }}>
    {children}
  </UserContext.Provider>
  )
}

export default Provider
export { UserContext }


