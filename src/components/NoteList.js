import React from 'react';
import Note from "./Note";

function NotesList(props) {
    const { notes, deleteNote } = props;
    const elements = notes.map(note => <Note key={note.id} note={note} deleteNote={deleteNote} />)
    return (
        <ul className='notes-list'>
            {elements}
        </ul>
    )
}

export default NotesList;