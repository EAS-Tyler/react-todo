import TodoItem from './TodoItem'

const TodoList = ({todos, title}) => {

    return (
        <div>
        <h1> {title} </h1>
        
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
          {todos.map((todo) => <TodoItem {...todo} />)}
        </tbody>
      </table>
      
      </div>
    )
}

export default TodoList