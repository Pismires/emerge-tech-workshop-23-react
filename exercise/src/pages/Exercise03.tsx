import { useState, useEffect } from "react";
import axios from "axios";

const Exercise03 = () => {
    const [todos, setTodos] = useState<Array<any>>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [editIndex, setEditIndex] = useState<null | number>(null);

    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com" 
     });

     useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await client.get("/todos");
            setTodos(response.data?.slice(0, 5));
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const addTodo = async () => {
        if (inputValue.trim() !== "") {
            try {
                if (editIndex !== null) {
                    const updatedTodos = [...todos];
                    const updatedTodo = { ...updatedTodos[editIndex], title: inputValue };
                    await client.put(`/todos/${updatedTodo.id}`, updatedTodo);
                    updatedTodos[editIndex] = updatedTodo;
                    setTodos(updatedTodos);
                    setEditIndex(null);
                } else {
                    const response = await client.post("/todos", {
                        title: inputValue,
                        completed: false,
                    });
                    setTodos([...todos, response.data]);
                }
                setInputValue("");
            } catch (error) {
                console.error("Error adding/editing todo:", error);
            }
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            await client.delete(`/todos/${id}`);
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    const editTodo = (index: number) => {
        const todoToEdit = todos[index];
        setInputValue(todoToEdit.title);
        setEditIndex(index);
    };

    return (
        <div className="component-body">
            <h1>Todo App</h1>
            <div className="todo-text-input-div">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a todo..."
                    className="todo-text-input"
                />
                <button className="todo-text-input-button" onClick={addTodo}>
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li className="todo-list-item" key={todo.id}>
                        {todo.title}
                        <button className="todo-list-item-button" onClick={() => editTodo(index)}>
                            Edit
                        </button>
                        <button className="todo-list-item-button" onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Exercise03;
