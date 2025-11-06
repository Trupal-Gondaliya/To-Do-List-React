import { useState } from "react";
import "./output.css";

function Header(props) {
    const [addItem, setAddItem] = useState("");

    function handelAdd() {
        if (addItem.trim() === "") return;
        props.onAddItem(addItem);
        setAddItem("");
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl m-4">To Do List</h1>
            <div className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={addItem}
                    className="border w-90 p-2"
                    placeholder="Enter a task..."
                    onChange={(e) => setAddItem(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handelAdd()}
                />
                <button
                    className="border p-2 bg-yellow-400 hover:bg-yellow-600 cursor-pointer transition-all"
                    onClick={handelAdd}
                >
                    Add
                </button>

            </div>
        </div>
    );
}

export default Header;
