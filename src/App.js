import React from 'react';
import './App.css';
import ToDoList from'./components/ToDoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>TO-DO LIST</strong>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
