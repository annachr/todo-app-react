import React, { useState } from 'react';


function Input() {
  const [itemToAdd, setItemToAdd] = useState('')
  const [list, setList] = useState([])
  const [isDone, setIsDone] = useState('')
  const today = new Date().toLocaleString()
  const currentTime = today.split(' ')
  const yearOnly = currentTime[0].slice(0, -1)
  const minutes = currentTime[1].slice(0, -3)
  const fullDate = yearOnly + " " + 0 + minutes + " " + currentTime[2]
  const [deadline, setDeadline] = useState(fullDate)

  const time = <input
    type="datetime-local"
    defaultValue={deadline}
    min={fullDate}
    onChange={e => setDeadline(e.target.defaultValue)}
    className="time"
  />

  const addItem = () => {
    setList(items => [...items, itemToAdd])
    setItemToAdd('')
    if (setList.length > 0) {
      setIsDone('')
    }
    console.log(currentTime)
    console.log(yearOnly)
    console.log(fullDate)
    console.log(time.props.min)
    console.log(minutes)
  }

  const clearAll = () => {
    setList([])
    setIsDone('')
  }

  const deleteItem = (item) => {
    const updateList = list.filter((element) => element !== item)
    setList(updateList)
    if (updateList.length === 0) {
      setIsDone('Good job!')
    }
  }



  // const deleteBtn = <button className="smallBtn delete" onClick={(item) => deleteItem(item)}>✗</button>
  // const doneBtn = <button className="smallBtn done">✓</button>

  return (
    <div className="wrapper">
    <div className="toDo">
      <input className="toDoInput"
        type="text"
        value={itemToAdd}
        placeholder={"What should I do..."}
        onChange={e => setItemToAdd(e.target.value)}
      />
      <button className="addItemBtn" onClick={addItem}>Add item</button>
      <button className="addItemBtn" onClick={clearAll}>Clear all</button>
    </div>
    <div className="toDoList">
      <ol>
        {list.map(item => <li key={item + Math.random()}>{item}
          <button className="smallBtn delete" onClick={() => deleteItem(item)}>Done</button>
          {/*<button className="smallBtn delete" onClick={() => deleteItem(item)}>✗</button>*/}
          {/*<button className="smallBtn done" onClick={() => doneItem(item)}>✓</button>*/}
          {time}
        </li>)}
      </ol>
    </div>
      <div className="alert">{isDone}</div>
    </div>
  );
}


export default Input;
