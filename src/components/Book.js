import React from 'react'
import { Button } from './Button'
import { Page } from './Page'

export const Book = (props) => {

    const [pages, setPages] = React.useState([])

    const addPage = () => {
        setPages((pages) => [...pages, <Page />]) //in reality I would grab these from a db

    }
  return (
    <div className="d-flex flex-row">
        {pages}

        <Button className="btn btn-info" label="Add Page" onClick={addPage}></Button>
    </div>
  )
}
