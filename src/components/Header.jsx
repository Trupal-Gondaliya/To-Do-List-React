import { use, useState } from "react";
import "./output.css";
import "./input.css";

function Header(props) {
    const [addItem, setAddItem] = useState("");

    // to add new item
    function handelAdd() {
        if (addItem.trim() === "") return;
        props.onAddItem(addItem);
        setAddItem("");
    } 

    const [mode,setMode] = useState(false);

    function toogleMode(){
        setMode(!mode);
        document.body.classList.toggle("dark-mode");
    }
    
    // Header with title and add item UI
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="title flex items-center text-4xl font-bold m-4">
                <img src="/todo.png" alt="Todo Icon" className="w-15 h-15 mr-3" />
                ToDo List
            </h1>

            <div className="mb-6 flex gap-2 w-full flex-wrap justify-center">
                <input
                    type="text"
                    value={addItem}
                    className="inputbox rounded border-2 p-2 w-[60%]"
                    placeholder="Enter a task..."
                    onChange={(e) => setAddItem(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handelAdd()}
                />
                <button
                    className="rounded p-2 px-5 bg-[#805cec] text-white font-bold hover:bg-[#fba1ef] cursor-pointer transition-all"
                    onClick={handelAdd}>
                    Add
                </button>
                <button 
                    className="rounded p-2 px-3 bg-[#805cec] text-white font-bold hover:bg-[gray] cursor-pointer transition-all"
                    onClick={toogleMode}>
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;
