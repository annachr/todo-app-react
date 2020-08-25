import React from 'react';
import './App.css';
import Input from'./components/Input';
// import ToDoList from'./components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <strong>TO-DO LIST</strong>
      </header>
      <Input />
      {/*<ToDoList />*/}
    </div>
  );
}

export default App;
