import ToDoItem from "./ToDoItem";

function ToDoList({todoitems,onEdit}){
    return(
        <div>
            {todoitems.map(data => <ToDoItem key={data.id} item={data} onEdit = {onEdit} />)}
        </div>
    )
}
export default ToDoList;