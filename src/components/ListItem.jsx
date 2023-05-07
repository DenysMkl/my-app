import React, {useState} from "react";

const ListItem = ({prop, ...props})=>{
    
    function makeShort(someText) {
        return someText.slice(0, 20)
    }

    function addClass(event) {
        let allItems = document.querySelectorAll('.listItemBlock')

        allItems.forEach(elem=>{
           elem.classList.toggle('active', event.target.closest('.listItemBlock') == elem)
        })
    }

    return (
        <li className="listItemBlock" onClick={addClass}>
            <h1 className="caption">{prop.cap}</h1>
            <div className="textContent">
                <span className="timeOfCreate">{prop.time}</span>
                <span className="itemText">{makeShort(prop.textItem)}</span>
            </div>
        </li>
    )
}

export default ListItem