import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';


function TodoList(props) {
  return (
    <li className="list-item">
         {props.item}
        <span className="icons">
            
            <RiDeleteBin6Line className='icon-delete' onClick={()=>{props.deletItems(props.index)}}/>
        </span>
    </li>
  )
}

export default TodoList
