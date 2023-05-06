import React, {useState} from "react";

const ChangeCaption = ()=>{
    const [val, setValue] = useState('Input smt');
    function Change(elem){
        setValue(elem.target.value)
    }
    return (
        <div className="TextAreaInput">
            <h1>{val}</h1>
            <input type="text" onChange={Change} value={val}/>
        </div>
    )
}

export default ChangeCaption