import { useState } from "react"
import noteicon from "../assets/noteicon.png";
import "./Notepad.css";
import Note from "./Note.jsx";

function Notepad() {
    const [notes, setNotes] = useState([])
    function addNote() {
        setNotes([
            ...notes,
            {
                id: Date.now(),
            },
        ])
    }
    function removeNote(noteId) {
        setNotes(notes.filter((item) => item.id !== noteId))
    }
    return (
        <div className="notepad">
            <img className="sticky-btn" alt="shitter" src={noteicon} onClick={addNote}/>
            {notes.map((item) => (
                <Note key={item.id} onClose={() => removeNote(item.id)} />
            ))}
        </div>
    )
}

export default Notepad