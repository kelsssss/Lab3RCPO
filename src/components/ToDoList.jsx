import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggleToDo={toggleTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
}

export default ToDoList;
