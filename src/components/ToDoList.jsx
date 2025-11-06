import ToDoItem from "./ToDoItem";

function ToDoList({todoitems,onEdit, onDelete}){
    return(
        <div>
            {todoitems.map(data => <ToDoItem key={data.id} item={data} onEdit = {onEdit} onDelete = {onDelete}/>)}
        </div>
    )
}
export default ToDoList;