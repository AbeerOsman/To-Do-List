import { useState } from "react";
const ToDoList = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }])
            setInput("")
        }
    }
    return (

            <div className="box">
                <h1>Get Things Done !!</h1>

                <div className="data-input">
                    <input type="text" placeholder="Add a new todo" value={input} onChange={
                        (e) => setInput(e.target.value)} />

                    <button onClick={addTodo}>Add</button>
                </div>

                <ul>
                    {
                        todos.map((todo) => (
                            <li
                                key={todo.id}>
                                <input type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => setTodos(
                                        todos.map((t) => (
                                            t.id === todo.id ? { ...t, completed: !t.completed } : t))
                                    )}
                                />
                                <span 
                                className={`flex-grow ${todo.completed ? "line-through" : ""}`}>
                                    {todo.text}
                                </span>

                                <button onClick={()=> setTodos(todos.filter(
                                    (t) => t.id !== todo.id
                                ))}>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
    );
}

export default ToDoList;