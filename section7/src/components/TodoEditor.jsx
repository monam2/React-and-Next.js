import { useState,useRef } from 'react';
import './TodoEditor.css';

export default function TodoEditor({onCreate}) {
  const [content, setContent] =useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onClick = ()=>{
    if (content==="") { //빈 입력 방지
      inputRef.current.focus();
      return
    }

    onCreate(content);
    setContent(""); //버튼 눌러 데이터 추가하면 칸 비워짐
  };

    onkeydown=(e)=>{
      if (e.keyCode === 13) {
        onClick();
      }
    }

  return (
    <div className="TodoEditor">
      <input
      ref={inputRef}
      value={content}
      onChange={onChangeContent}
      onKeyDown={onkeydown}
      type="text"
      placeholder='새로운 Todo...'
      />
      <button onClick={onClick}>추가</button>
    </div>
  )
}