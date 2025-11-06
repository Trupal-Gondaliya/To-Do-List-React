import { useState } from "react";

function ToDoItem(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.item.text);


    function handelEdit() {
        if (editedText.trim() === "") return;
        props.onEdit(props.item.id, editedText);
        setIsEditing(false);
    }

    function handelDel(){
        props.onDelete(props.item.id);
    }

    return (
        <div className="border p-2 m-2 rounded flex items-center justify-between">
            {
                isEditing ? (
                    <div className="flex w-full items-center gap-2">
                        <input
                            type="text"
                            value={editedText}
                            className="border p-2 rounded"
                            onChange={(e) => setEditedText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handelEdit()}
                        />
                        <button
                            className="border p-2 bg-yellow-400 hover:bg-yellow-600 cursor-pointer transition-all"
                            onClick={handelEdit}
                        ><i className="fa-solid fa-check"></i></button>
                        <button
                            className="border p-2 bg-red-500 hover:bg-red-800 cursor-pointer transition-all"
                            onClick={() => setIsEditing(false)}
                        ><i className="fa-solid fa-xmark"></i></button>
                    </div >
                ) : (
                    <div className="flex justify-between w-full items-center">
                        <p className="text-left">{props.item.text}</p>
                        <div className="flex gap-4 ml-4">
                            <button onClick={() => setIsEditing(true)}><i className="fa-solid fa-pen hover:text-yellow-600 cursor-pointer"></i></button>
                            <button onClick={handelDel}><i className="fa-solid fa-trash text-red-700 hover:text-blue-500 cursor-pointer"></i></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default ToDoItem;