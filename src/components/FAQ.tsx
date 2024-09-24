import { useState } from "react";

let show = "hidden";
let show2 = "hidden"

function Faq(){
    const [hideAnswer1, setAnswer] = useState(true);
    const [showAnswer2, setAnswer2] = useState(false);

    function handleClick(){
        setAnswer(!hideAnswer1)
        if(!hideAnswer1){
            show = "hidden";
            show2 = "hidden";
        } else {
            show=""
        }
        setAnswer2(true);
    }

    function handleClick2(){
        setAnswer2(!showAnswer2);
        if(showAnswer2){
            show2 = "";
        } else {
            show2="hidden"
        }
    }
    return <div>
        <div>Why is React gerat?</div>
        <button className="border-2 border-black" onClick={handleClick}>-</button>
        <hr className={show}/>
        <div className={show}>Fast Learning Curve</div>
        <button className={show} onClick={handleClick2}>-</button>
        <div className={show2}>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
        As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.</div>
    </div>
}

export default Faq;