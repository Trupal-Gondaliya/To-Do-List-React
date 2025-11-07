import { useState } from 'react'
import Header from "./components/Header.jsx"
import ToDoList from './components/ToDoList.jsx';

function App() {
  // Todo list
  const [todo,setToDo] = useState([]);
  // Id for each task
  const [nextId, setNextId] = useState(1);

  // add item to Todo list
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

  // Edit functionality
  function edit(id,newText){
    setToDo(
      todo.map(data => data.id === id ? {...data,text:newText} : data)
    );
  }

  // Delete functionality
  function deleteItem(id){
    setToDo(
      todo.filter(data => data.id !==  id)
    );
  }

  // Toogle mark as Completed item
  function toogleMarkCom(id){
    setToDo(
      todo.map(data => data.id === id ? {...data,completed:!data.completed}: data)
    );
  }

  return (
    <div>
      <Header onAddItem = {addTodoItem}/>
      <ToDoList todoitems = {todo} onEdit = {edit} onDelete = {deleteItem} ontoggleMarkCom = {toogleMarkCom}/>
    </div>
  )
  
}

export default App
