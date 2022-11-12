import React from 'react'
import { Button } from './Button';
import '../App.css';

export const Note = () => {
    const [text, setText] = React.useState("");
    const [editOn, setEditOn] = React.useState(false);
    const [important, setImportant] = React.useState(false);

    const [active, setActive] = React.useState(false);


    const handleClick = () => { //reveals edit and mark completed buttons
        setActive(!active)
    }

    const editText = (e) => { //stores existing textbox text in state
      console.log(e.target.previousElementSibling.innerText)
      setText(e.target.previousElementSibling.innerText)
      setEditOn(!editOn)
    }

    const saveText = (e) => { //saves text
      console.log(e.target.previousElementSibling.previousElementSibling.value) 
      setText(e.target.previousElementSibling.previousElementSibling.value)
      setActive(false)
      setEditOn(false)
    }

    const cancelEdit = () => {
      setActive(false)
      setEditOn(false)
    }

    const flipImportant = () => {
      setImportant(!important)
    }
  return (
    <div className={`container note mb-4 pt-4 pb-4 roundedDrop ${important && "important"}`} onClick={handleClick}>
        {!editOn && <p className={`${important && "heavy"}`}>{text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>}
        {editOn && <div>
          <textarea id="textBox" className={`form-control mb-4 ${important && "heavy"}`}>{text}</textarea>
          <button className="btn btn-danger">Delete Item</button>
          <button className="btn btn-success" onClick={saveText}>Save</button>
          <button className="btn btn-warning" onClick={cancelEdit}>Cancel</button>
          <button className="btn btn-primary" onClick={flipImportant}>Mark Important</button>
          </div>}
        {active && !editOn && <button className="btn btn-info" onClick={editText} label="Edit">Edit</button>}
    </div>
  )
}
