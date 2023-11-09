import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even';
import {useState, useEffect, useRef} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const isMountRef = useRef(false);

  useEffect(()=>{

    if (!isMountRef.current) {
      isMountRef.current = true;
      return;
    }
    console.log("업데이트");
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
  const onChangeText = (e)=>{
    setText(e.target.value);
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
