import React from "react";

function ToDoItem({ todo, toggleToDo, deleteTodo }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleToDo(todo.id)}
            />
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
        </div>
    );
}

export default ToDoItem;
