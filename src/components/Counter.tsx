import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return <div>
        <button className="border-2 border-black" onClick = {handleClick}>Counter is {count}</button>
    </div>
}

export default Counter;