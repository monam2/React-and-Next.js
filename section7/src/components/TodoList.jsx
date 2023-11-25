import './TodoList.css'
import TodoItem from './TodoItem'

export default function TodoList() {

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input type="text" placeholder='검색어를 입력하세요' />
      <div className="todos_wrapper">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}