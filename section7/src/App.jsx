import { useRef, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "음악 연습하기",
    createdDate: new Date().getTime(),
  },
];

const reducer = (state, action) => {

  switch (action.type) {
    case "CREATE": return [...state, action.data];
    case "UPDATE": return state.map((it) => it.id === action.data ? { ...it, isDone: !it.isDone } : it);
    case "DELETE": return state.filter((it) => it.id !== action.data);
  };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch(
      {
        type: "CREATE",
        data: {
          id: idRef.current++,
          isDone: false,
          content,
          createdDate: new Date().getTime(),
        }
      })
    // setTodos([...todos, newTodo]);
  }

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId,
    });

    //   setTodos(
    //     todos.map(todo=>{
    //       if(todo.id === targetId) { // isDone의 값을 바꿔주면 됨
    //         return {...todo, isDone : !todo.isDone}
    //       } else { // isDone의 값을 내버려두면 됨
    //         return todo;
    //       }
    //     })
    //   )
  };

  const onDelete = (targetId) => {
    // setTodos(
    //   todos.filter((todo)=>todo.id!==targetId)
    // )

    dispatch({
      type: "DELETE",
      data: targetId,
    })

  }

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}
export default App;
