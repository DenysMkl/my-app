import React, {useState} from "react";
import ListItem from './ListItem';

const SideBar = ()=>{
    const [items, setItem] = useState([
        {id: 1, time: '12:47 PM', cap: 'Wow, what a cool...', textItem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'},
        {id: 2, time: '7:12 AM', cap: 'You can check flights...', textItem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'},
        {id: 3, time: '17:26 PM', cap: 'OSI example...', textItem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the'},
      ])

    return (
        <nav className='navbar'>
          <ul className='sidebar'>
          {items.map(item=>
              <ListItem prop={item} key={item.id}/>
            )}
          </ul>
      </nav>
    )
}

export default SideBar