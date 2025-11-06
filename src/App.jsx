import { useState } from 'react'
import Header from "./components/Header.jsx"
import ToDoList from './components/ToDoList.jsx';

function App() {

  const [todo,setToDo] = useState([]);
  const [nextId, setNextId] = useState(1);

  function addTodoItem(item){
    if (!item.trim()) return;
    const newToDoItem = {
      id : nextId,
      text : item.trim(),
      completed : false
    };

    setToDo([...todo,newToDoItem]);
    setNextId(nextId + 1);
  }

  return (
    <>
      <Header onAddItem = {addTodoItem}/>
      <ToDoList todoitems = {todo}/>
    </>
  )
  
}

export default App
