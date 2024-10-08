import React, { useEffect, useState } from "react";
import './todolist.css';

const TodoList = () => {
  <h1>To Do List</h1>;
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

    // Load todos from localStorage on component mount
    useEffect(() => {
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      setTodos(storedTodos);
    }, []);
  
    // Save todos to localStorage whenever todos change
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? inputValue : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
    }

    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <>
      <div className="todo-app">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleEditTodo(index)}>Edit</button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
