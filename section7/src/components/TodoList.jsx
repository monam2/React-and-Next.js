import './TodoList.css'
import TodoItem from './TodoItem'
import { useState } from 'react'

export default function TodoList({ todos, onUpdate,onDelete }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterTodos = () => {
    if (search===""){
      return todos
    }
    //else
    return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()))
  }


  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input value={search} onChange={onChangeSearch} type="text" placeholder='검색어를 입력하세요' />


      <div className="todos_wrapper">
        {
          filterTodos().map((todo) => (
            <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
          ))
        }
      </div>
    </div>
  )
}