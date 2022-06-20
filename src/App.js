
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './Components/NoteList';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {

  const [searchNote,setsearchNote] = useState('');

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello First note........",
      date: "1/6/2022"
    },
    {
      id: nanoid(),
      text: "Hello Secound note........",
      date: "2/6/2022"
    },
    {
      id: nanoid(),
      text: "Hello Third note........",
      date: "3/6/2022"
    }
  ]);
  const Addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  
  return (
    <div className="App">
      <Header/>
      <Search handleSearchNote={setsearchNote}/>
      <NoteList
        note={notes.filter((note) => note.text.toLowerCase().includes(searchNote))}
        handleAddNote={Addnote}
        handleDeleteNote={DeleteNote}
      />
    </div>
  );
}

export default App;
