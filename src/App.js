import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';

function App(props) {
  const [listTodo, setListTodo] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [inputText, setInputText] = useState('');
  const [isEditItem, setIsEditItem] = useState(null);

  const addList = () => {
    if (!inputText) {
      alert('Please Enter Todo');
      return;
    }

    if (toggle) {
      setListTodo([...listTodo, inputText]);
    } else {
      setListTodo(
        listTodo.map((elem, index) => {
          if (index === isEditItem) {
            return inputText;
          }
          return elem;
        })
      );
    }

    setInputText('');
    setToggle(true);
    setIsEditItem(null);
  }

  const editTodo = (index) => {
    const findItem = listTodo[index];
    setToggle(false);
    setInputText(findItem);
    setIsEditItem(index);
  }

  const onDeleteList = (key) => {
    const newList = listTodo.filter((item, index) => index !== key);
    setListTodo(newList);
  }

  const deleteAllItems = () => {
    setListTodo([]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <div className="input-container">
          <input
            type="text"
            className="input-box-todo"
            placeholder="Enter your todo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {toggle ? (
            <button className="add-btn" onClick={addList}>
              +
            </button>
          ) : (
            <button className='add-btn' onClick={addList}>edit</button>
          )}
        </div>
        <h1 className='app-heading'>TODO</h1>
        <hr className='text-white' />
        {listTodo.map((listItem, index) => (
          <TodoList
            index={index}
            key={index}
            item={listItem}
            deletItems={onDeleteList}
            editTodo={editTodo}
          />
        ))}
        <div className='d-flex justify-content-center'>
          <button className='delete-all rounded' onClick={() => { deleteAllItems(props.index) }}>Delete All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
