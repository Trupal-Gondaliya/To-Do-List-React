import ToDoItem from "./ToDoItem";

function ToDoList(props){
    return(
        <div>
            {props.todoitems.map(data => <ToDoItem key={data.id} item={data}  />)}
        </div>
    )
}
export default ToDoList;