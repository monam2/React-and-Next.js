import { useReducer } from "react"

const reducer = (state, action) => {
    if (action.type === "Decrease") {
        return state - action.data
    }
    return state + action.data;
}

export default function B() {

    const [count, dispatch] = useReducer(reducer, 0);

    return (
    <div>
        <h4>{count}</h4>
        <div>
            <button // -버튼
            onClick={()=>{
                dispatch({
                    type : "Decrease",
                    data : 1,
                });
            }}>-</button>
            <button // +버튼
            onClick={()=>{
                dispatch({
                    type : "Increase",
                    data : 1,
                })
            }}
            >+</button>
        </div>

    </div>
    )
}