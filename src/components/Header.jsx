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
            <h1 className="flex items-center text-4xl font-bold m-4 text-[#242f6d]">
                <img src="/todo.png" alt="Todo Icon" className="w-15 h-15 mr-3" />
                ToDo List
            </h1>

            <div className="mb-6 flex gap-2">
                <input
                    type="text"
                    value={addItem}
                    className="border-2 w-90 p-2 bg-[#ffffff]"
                    placeholder="Enter a task..."
                    onChange={(e) => setAddItem(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handelAdd()}
                />
                <button
                    className="p-2 px-5 bg-[#805cec] text-white font-bold hover:bg-[#fba1ef] cursor-pointer transition-all"
                    onClick={handelAdd}
                >
                    Add
                </button>

            </div>
        </div>
    );
}

export default Header;
