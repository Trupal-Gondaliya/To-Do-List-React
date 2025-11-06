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

  function edit(id,newText){
    setToDo(
      todo.map(data => data.id === id ? {...data,text:newText} : data)
    );
  }

  function deleteItem(id){
    setToDo(
      todo.filter(data => data.id !==  id)
    );
  }

  function toogleMarkCom(id){
    setToDo(
      todo.map(data => data.id === id ? {...data,completed:!data.completed}: data)
    );
  }

  return (
    <>
      <Header onAddItem = {addTodoItem}/>
      <ToDoList todoitems = {todo} onEdit = {edit} onDelete = {deleteItem} ontoggleMarkCom = {toogleMarkCom}/>
    </>
  )
  
}

export default App
