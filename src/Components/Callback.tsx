import React, { useState } from "react";
import './styles.css';
const input = document.getElementById("input1")

//child
const Callback = (props: any) => {
    const [activeNum, setActiveNum] = useState(Number);
    const requirement = () => {
        activeNum >=18 ? props.getAccess = true: props.getAccess = false
    };
    const handleChange = (e: any) => {
        const {value} = e.target;
        props.getNum(value);
        setActiveNum(value);
    };
    
    return(
        <>
        <input id="input1" onChange={handleChange}></input>
        <button onClick={requirement} className="button"/> 
        
        </>
    );
};


export default Callback