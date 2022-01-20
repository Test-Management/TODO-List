import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input data-testid="add-input"
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder="Enter task..."
                className="EditorArea"    
            />
            <button data-testid="add-button" className="SubmitButton">Add</button>
        </form>
    );
};

export default ToDoForm;
