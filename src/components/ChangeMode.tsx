import { useState } from "react";

let changeToTime = "Night";
let actualTime = "Day";
let bgColor = "bg-yellow-200"

function ChangeMode(){
    const [mode, setMode] = useState(true);
    const handleClick = () => {
        setMode(!mode);
        if (mode == true){
            changeToTime = "Night";
            actualTime = "Day";
            bgColor = "bg-yellow-200"
        } else {
            changeToTime = "Day";
            actualTime = "Night";
            bgColor = "bg-slate-800"
        }
    }

    return <div className={bgColor}>
        <h2>{actualTime}</h2>
        <button onClick={handleClick} className="border-2 border-black">Change to {changeToTime}</button>
    </div>
}

export default ChangeMode;