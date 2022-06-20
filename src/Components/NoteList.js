import React, { useState } from 'react'
import AddNote from './AddNote';
import Note from './Note'
import './note.css';
function NoteList({ note , handleAddNote,handleDeleteNote}) {
    // const [note,setNote] = useState([]);
    return (
        <>
            {/* {note.map((note) => <Note/>)} */}
            <div className='notelist' >
                {note.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />)}
                <AddNote handleAddNote={handleAddNote}/>
            </div>
            
        </>
    )
}

export default NoteList