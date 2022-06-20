import React,{useState} from 'react'
import './note.css';
import Button from '@mui/material/Button';

function AddNote({handleAddNote}) {
    const [textArea, settextArea] = useState("");
    const charLimit= 200;
    const handleChange = (e) =>{
        if(charLimit - e.target.value.length>0)
        {
            settextArea(e.target.value);
        }
       
    }
    const handleSaveClick = () =>{
        if(textArea.trim().length>0)
        {
            handleAddNote(textArea);
            settextArea('');
        }
     
    }
    return (
        <>
            <div className='newnote' >
                {/* <textarea rows='8' cols='10' value={textArea} onChange={handleChange} placeholder='Typing......' ></textarea> */}
                <textarea rows='8' cols='10' value={textArea}  onChange={handleChange} placeholder='Typing...' ></textarea>
                <span className='char' >{charLimit- textArea.length} </span>
                <Button onClick={handleSaveClick} sx={{ width: 15, height: 25, marginLeft: 18, marginTop: -4, color: 'green', borderRadius: 20, backgroundColor: 'white' }} variant="outlined">Save</Button>

            </div>
        </>
    )
}

export default AddNote