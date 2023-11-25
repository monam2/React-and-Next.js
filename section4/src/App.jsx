import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even';
import {useState, useEffect } from 'react';
import useUpdate  from '../hooks/useUpdate';
import useInput from '../hooks/useInput';

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(()=>{
    console.log("APP 컴포넌트 업데이트")
  });

  useEffect(()=>{
    console.log("마운트");
  },[]);

  const onClickButton = (value)=>{
    setCount(count + value);
  }
  const resetButton = ()=>{
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <input value={text} onChange={onChangeText} />
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
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
