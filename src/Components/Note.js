import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './note.css';
function Note({id,text,date,handleDeleteNote}) {
  return (
    <div className='note' >
        {/* <input
        type='text'
        placeholder='Type.....' 
        />
        <input
        className='date'
        type='date'
        /> */}
        <span>{text}</span>
        <span>{date}</span>
        <Button onClick={() => handleDeleteNote(id)} sx={{width: 15,height:25,marginLeft:18,marginTop:-4}} variant="outlined"><DeleteIcon sx={{width: 20}} /></Button>
    </div>
  )
}

export default Note