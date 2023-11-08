import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value)=>{
    setCount(count + value);
  }
  const resetButton = ()=>{
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller
        onClickButton={onClickButton}
        resetButton={resetButton}
        />
      </section>
    </div>
  )
}

export default App
