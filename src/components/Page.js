import React from 'react'
import { Button } from './Button'
import { Note } from './Note'

export const Page = (props) => {

    const [notes, setNotes] = React.useState([])

    const addNote = () => {
        setNotes((notes) => [...notes, <Note />]) //in reality I would grab these from a db

    }

  return (
    <div className="container page-normal">
        {notes}
    <Button className="btn btn-info" label="Add Note" onClick={addNote}></Button>
    </div>
  )
}
