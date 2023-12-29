import { useState } from "react";

const User = ({name,location}) => {

    const [count,setCount]=useState(0);
const handleIncrease=()=>{
    setCount(count+1);
}
    const handleDecrease = () => {
       
            setCount(count - 1);
        
       
    }
    return (
        <div >
            <h1>count:{count}</h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:karthikreddo@gmail.com</h4>
        </div>
    )
}

export default User;