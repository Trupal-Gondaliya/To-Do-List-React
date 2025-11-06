import { useState } from "react";

function ToDoItem(props) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.item.text);


    function handelEdit() {
        if (editedText.trim() === "") return;
        props.onEdit(props.item.id, editedText);
        setIsEditing(false);
    }

    function handelDel() {
        props.onDelete(props.item.id);
    }

    return (
        <div className="border p-3 m-3 w-[70%] max-w-xl rounded-lg flex flex-col items-center justify-center bg-[#fffae4] mx-auto min-h-[70px]">
            {
                isEditing ? (
                    <div className="flex w-full items-center gap-2">
                        <input
                            type="text"
                            value={editedText}
                            className="border p-2 rounded w-full"
                            onChange={(e) => setEditedText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handelEdit()}
                        />
                        <button
                            className="p-2 text-[#805cec] text-xl font-bold hover:text-[#58d9a1] cursor-pointer transition-all"
                            onClick={handelEdit}
                        ><i className="fa-solid fa-check"></i></button>
                        <button
                            className="p-2 text-[#f877ad] text-xl font-bold hover:text-[#af0d0d] cursor-pointer transition-all"
                            onClick={() => setIsEditing(false)}
                        ><i className="fa-solid fa-xmark"></i></button>
                    </div >
                ) : (
                    <div className="flex justify-between w-full items-center">
                        <div className="flex gap-4 ml-4">
                            <input type="checkbox" className="w-6 h-6 accent-[#805cec]" checked={props.item.completed} onChange={() => props.ontoggleMarkCom(props.item.id)} />
                            <p className={`text-left ${props.item.completed ? "line-through text-gray-500" : ""}`}>{props.item.text}</p>
                        </div>
                        <div className="flex gap-4 ml-4 text-xl">
                            <button onClick={() => setIsEditing(true)}><i className="fa-solid fa-pen text-[#58d9a2]  hover:text-yellow-600 cursor-pointer"></i></button>
                            <button onClick={handelDel}><i className="fa-solid fa-trash text-[#ff5b59] hover:text-blue-500 cursor-pointer"></i></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
export default ToDoItem;