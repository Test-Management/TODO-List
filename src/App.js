import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function App({ initialData }) {
  
    const [ toDoList, setToDoList ] = useState(initialData ? initialData : data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

    const deleteTask = (id) => {
        let mapped = toDoList.filter(task => {
            return task.id !== Number(id);
        });
        setToDoList(mapped);
    }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
        const biggestId = Math.max(...toDoList.map(task => task.id));
    copy = [...copy, { id: biggestId + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <>
      <Header />
      <div className="App">
        <ToDoForm addTask={addTask}/>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={deleteTask}/>
        <div style={{textAlign: "center"}}>
          <button className="SubmitButton ClearButton" onClick={handleFilter}>Clear Completed</button>
        </div>
      </div>
    </>
  );
}

export default App;
