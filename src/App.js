import { useState, useEffect,createContext, useContext } from 'react'
import './App.css';
import TodoList from './components/TodoList'
import NewTodo from './components/Newtodo'
import { UserContext } from './Provider';

function App() {

  // const [todos, setTodos] =useContext(UserContext)
  const [todos, setTodos] =useContext(UserContext).todos
  const [toggle, setToggle] = useState(false);

const getTodos = useContext(UserContext).getTodos
  useEffect(() => {
    // fetch("http://localhost:3000/todos")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setTodos(data)
    //   })

    //   console.log(todos)
    getTodos()
  }, [])



  return (
    <div className="App">
      <TodoList todos={todos.filter((todo) => todo.status == "inprogress" )} title="ToDo List"/>
      <NewTodo/>

      <button onClick={() => setToggle(!toggle)}>Show Completed Todos</button>
      {toggle && <TodoList todos={todos.filter((todo) => todo.status == "completed" )} title="Completed ToDos"/>}


    </div>
   


   
  );
}

export default App;