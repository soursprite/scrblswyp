import React from 'react'
import { Button } from './Button';
import '../App.css';

export const Note = () => {
    const [text, setText] = React.useState("");
    const [editOn, setEditOn] = React.useState(false)

    const [active, setActive] = React.useState(false);


    const handleClick = () => {
        setActive(!active)
    }

    const editText = (e) => {
      console.log(e.target.previousElementSibling.innerText)
      setText(e.target.previousElementSibling.innerText)
      setEditOn(!editOn)
    }

    const cancelEdit = () => {
      setActive(false)
      setEditOn(false)
    }
  return (
    <div className="container note-normal">
        <h2 className="mb-4">This is what a note would look like</h2>
        {!editOn && <p onClick={handleClick}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
        {editOn && <div>
          <textarea className="form-control" value={text}></textarea>
          <button className="btn btn-danger">Delete Item</button>
          <button className="btn btn-success">Save</button>
          <button className="btn btn-warning" onClick={cancelEdit}>Cancel</button>
          </div>}
        {active && !editOn && <button className="btn btn-info" onClick={editText} label="Edit">Edit</button>}
    </div>
  )
}
