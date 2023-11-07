import './Body.css';
import { useState } from 'react';

function LightBulb({light}) {
    return(
        <>
        {light === 'ON' ?
        <div style={{backgroundColor:"orange"}}>{light}</div> :
        <div style={{backgroundColor:"gray"}}>{light}</div>
        }</>
    )
}

function StaticLightBulb() {
    console.log(1)
    return (
        <div style={{backgroundColor:"gray"}}>OFF</div>
        
    )
}

export default function Body() {
    const [light, setLight] = useState("OFF");

    return (
        <div className="body">
        <LightBulb light={light}/>
        <StaticLightBulb />
        <button onClick={()=>{
            setLight("OFF");
            }
        }>끄기</button>
        <button onClick={()=>{
            setLight("ON");
            }
        }>켜기</button>


        {/* <button onClick={()=>{
            setLight("OFF")
        }}>끄기</button> */}
        
        </div>
    )
}