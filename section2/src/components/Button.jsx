import "./Button.css"

export default function Button({ color, text, children }) {
    return (
    <button 
    style={{backgroundColor: color}}
    className="button" > {children} </button>
    
)}