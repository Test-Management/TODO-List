import React from 'react';

const ToDo = ({todo, handleToggle, handleDelete}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const deleteTask = (e) => {
        e.preventDefault()
        handleDelete(todo.id)
    }

    return (
        <div className="ToDoItem">
            <div 
                id={todo.id}
                key={todo.id + todo.task}
                name="todo"
                value={todo.id}
                onClick={handleClick}
                className={todo.complete ? "todo strike" : "todo"}
            >
                {todo.task}
            </div>
            <button data-testid={`todo-${todo.id}-del-btn`} onClick={deleteTask} className="DeleteButton">Delete</button>
        </div>
    );
};

export default ToDo;
