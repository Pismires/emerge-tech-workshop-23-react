import { useState } from "react";

const Exercise02 = () => {
    const [todos, setTodos] = useState<Array<string>>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [editIndex, setEditIndex] = useState<null | number>(null);

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            if (editIndex !== null) {
                const updatedTodos = [...todos];
                updatedTodos[editIndex] = inputValue;
                setTodos(updatedTodos);
                setEditIndex(null);
            } else {
                setTodos([...todos, inputValue]);
            }
            setInputValue('');
        }
    };

    const deleteTodo = (index: number) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const editTodo = (index: number) => {
        const todoToEdit = todos[index];
        setInputValue(todoToEdit);
        setEditIndex(index);
    };

    return (
        <div className="component-body">
            <h1>Todo App using State Array</h1>
            <div className="todo-text-input-div">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add a todo..."
                    className="todo-text-input"
                />
                <button className="todo-text-input-button" onClick={addTodo}>{editIndex !== null ? 'Update' : 'Add'}</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li className="todo-list-item" key={index}>
                        {todo}
                        <button className="todo-list-item-button" onClick={() => editTodo(index)}>Edit</button>
                        <button className="todo-list-item-button" onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Exercise02;