import React, {useState} from "react";

const Counter = function() {
    const [counter, setCount] = useState(0)

    function incr(){
        setCount(counter+1)
    }

    function decr() {
        setCount(counter-1)
    }

    return  (
        <div className="Test">
            <h1>{counter}</h1>
            <button onClick={incr} type="submit">add</button>
            <button onClick={decr} type="submit">minus</button>
        </div>

    )
}

export default Counter;