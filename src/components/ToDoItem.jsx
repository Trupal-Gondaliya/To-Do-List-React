import { useState } from "react";

function ToDoItem(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.item.text);


    function handelEdit() {
        if(editedText.trim() === "") return;
        props.onEdit(props.item.id,editedText);
        setIsEditing(false);
    }

    return (
        <div className="border p-2 m-2 flex justify-between">
            {
                isEditing ? (
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={editedText}
                            className="border w-100 p-2"
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
                        ><i class="fa-solid fa-xmark"></i></button>
                    </div >
                ) : (
                    <>
                        <p>{props.item.text}</p>
                        <button onClick={() => setIsEditing(true)}><i className="fa-solid fa-pen hover:text-yellow-600 cursor-pointer"></i></button>
                    </>
                )
            }
        </div>
    );
}
export default ToDoItem;