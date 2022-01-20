import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleDelete}) => {
    const checked = toDoList.filter(todo => !todo.complete)
    const unchecked = toDoList.filter(todo => todo.complete)

    return (
        <div data-testid="list" className="ToDoList">
            {unchecked.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
                )
            })}
            {checked.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
                )
            })}
        </div>
    );
};

export default ToDoList;
