import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiTwotoneEdit } from 'react-icons/ai';


function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <AiTwotoneEdit className='icon-edit' onClick={() => props.editTodo(props.index)} />
        <RiDeleteBin6Line className='icon-delete' onClick={() => { props.deletItems(props.index) }} />
      </span>
    </li>
  )
}

export default TodoList
