import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App(props) {
  const [listTodo,setListTodo]=useState([]);
  const addList=(inputText)=>{
    if(inputText!=='')
        setListTodo([...listTodo,inputText])
  }
  const onDeleteList=(key)=>{
    const newList=[...listTodo]
    newList.splice(key,1)
    setListTodo(newList)
  }
  const deleteAllItems=(index)=>{
       const secondNewList=[...listTodo]
       secondNewList.splice(index,listTodo.length)
       setListTodo(secondNewList)
  }
  return (
    <div className="main-container">
      <div className="center-conatiner">
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr className='text-white'/>
        {listTodo.map((listItem,index)=>{
          return(<TodoList index={index} key={index} item={listItem} deletItems={onDeleteList} />)
        })}
        <div className='d-flex justify-content-center'>
          <button className='delete-all rounded' onClick={()=>{deleteAllItems(props.index)}}>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
