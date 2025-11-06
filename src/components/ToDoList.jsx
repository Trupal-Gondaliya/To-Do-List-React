import ToDoItem from "./ToDoItem";

function ToDoList({todoitems,onEdit, onDelete, ontoggleMarkCom}){
    return(
        <div>
            {todoitems.map(data => <ToDoItem key={data.id} item={data} onEdit = {onEdit} onDelete = {onDelete} ontoggleMarkCom= {ontoggleMarkCom}/>)}
        </div>
    )
}
export default ToDoList;