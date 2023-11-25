import useUpdate from '../../hooks/useUpdate'
import './Controller.css'

export default function Controller({onClickButton, resetButton}) {

    useUpdate(()=>{
        console.log("Contoller 컴포넌트 업데이트")
    })

    return (
        <div>
            <button onClick={()=>{onClickButton(-1)}}>-1</button>
            <button onClick={()=>{onClickButton(-10)}}>-10</button>
            <button onClick={()=>{onClickButton(-100)}}>-100</button>
            <button onClick={()=>{onClickButton(100)}}>+100</button>
            <button onClick={()=>{onClickButton(10)}}>+10</button>
            <button onClick={()=>{onClickButton(1)}}>+1</button>

            <button
            style={{marginLeft : "10px"}}
            onClick={()=>{resetButton()}}
            >Reset
            </button>
        </div>
    )
}