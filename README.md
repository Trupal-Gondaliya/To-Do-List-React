# To-Do-List-React (React + Vite)
Simple To-Do List React app using functional components, state, and props.

##  Project Overview
This is a simple To-Do List web application built using React (with Vite).  
It allows users to:
- Add new tasks  
- Edit existing tasks  
- Mark tasks as completed (checkbox)  
- Delete tasks  

All components are created using functional components, props, and state management with the `useState` hook.

## Features Implemented
- Add new to-do items  
- Edit any existing to-do item  
- Mark tasks as completed with a checkbox (line-through effect)  
- Auto-incrementing ID starting from 1  
- Clean and minimal UI using Tailwind / CSS  
- Organized component structure  
- Dark/Light Mode toggle

## Components
| Component | Responsibility |
| App.jsx | Holds state for the to-do list, handles all logic (add, edit, delete, toggle complete) |
| Header.jsx | Displays title, input field, and “Add” button |
| ToDoList.jsx | Maps and displays all To-Do items |
| ToDoItem.jsx | Displays a single task with edit, checkbox, and delete options |

## Technologies Used
- React (Functional Components)
- Vite (Fast build tool)
- Tailwind CSS / Plain CSS
- Font Awesome (for icons)
- JavaScript (ES6)

##  How It Works
1. The user types a task in the input field and clicks Add.  
2. The `Header` sends that text to the `App` component.  
3. `App` stores it in a state array with a unique ID.  
4. The list of todos is rendered dynamically via `ToDoList` and `ToDoItem`.  
5. Each `ToDoItem` has:
   - Edit button  
   - Checkbox (mark complete)  
   - Delete button  
6. The Dark/Light toggle instantly changes the color scheme.

### How to Run the Project
1. Clone the repository:
    git clone <repository-url>
2. Navigate to the project folder:
    cd todo-app
3. Install dependencies:
    npm install
4. Run the development server:
    npm run dev
5. Open in browser:
    http://localhost:5173

### Author
Name: Trupal Gondaliya