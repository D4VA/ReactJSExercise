import { TodoListItem } from "./TodoListItem"

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul>
      {
        todos.map( (todo, i) => (
          //TodoListItem, todo, index, handleDelete, handleToogle
          <TodoListItem 
            todo={todo} 
            index={i}
            handleDelete={ handleDelete } 
            handleToggle={ handleToggle }
          />
        ))
      }
    </ul>
  )
}
