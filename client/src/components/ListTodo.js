import React from 'react';


// list to do and deletes to do from list
const listTodo = ({ todos, deleteTodo }) => {

  return (
    <ul>
      {
        todos && todos.length > 0 ? (
              todos.map(todo => {
                return (
                  <li key={todo._id} onClick={() => deleteTodo(todo._id)}>{todo.action}</li>
                )
              })
            )
            :
            (
              <li>Empty List</li>
            )
      }
    </ul>
  )
}

export default listTodo