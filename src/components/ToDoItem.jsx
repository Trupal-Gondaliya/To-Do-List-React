function ToDoItem(props){
   return (
    <div className="border p-2 m-2 flex justify-between">
      <p>{props.item.text}</p>
    </div>
  );


}
export default ToDoItem;