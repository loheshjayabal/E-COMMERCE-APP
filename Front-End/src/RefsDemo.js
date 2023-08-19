import { useRef } from "react";


function RefsDemo(){
let nameInputRef = useRef()
return (<>
    <span>Name:</span>
    <input type="text" ref={nameInputRef}></input>
    <button >Show Name</button>
    </>)
}

export default RefsDemo;
