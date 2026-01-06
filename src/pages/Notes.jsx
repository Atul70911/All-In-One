import React, { useState } from "react";
import "../style/Notes.css";
import { Files, Trash } from "lucide-react";

const Notes = ({ setPage }) => {
  const [notes, setNotes] = useState([]);

  const createNote = () => setNotes((prev) => [...prev, ""]);

  const updateNote = (idx, value) => {
    setNotes((prev) => prev.map((n, i) => (i === idx ? value : n)));
  };

  const handleCopy = async (val) => {
    try {
      await navigator.clipboard.writeText(val);
      alert("Copied!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleDelete = (idx) => {
    setNotes((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="notesApp">
      <h1>NoteBook</h1>
      <button className="notesCreateBtn" onClick={createNote}>Create Note</button>

      {notes.map((val, idx) => (
        <div className="noteCard" key={idx}>
          <div className="noteActions">
            <button
              className="noteIconBtn"
              type="button"
              onClick={() => handleCopy(val)}
              aria-label="Copy note"
              title="Copy"
            >
              <Files size={18} />
            </button>

            <button
              className="noteIconBtn noteDanger"
              type="button"
              onClick={() => handleDelete(idx)}
              aria-label="Delete note"
              title="Delete"
            >
              <Trash size={18} />
            </button>
          </div>

          <textarea
            className="noteTextarea"
            value={val}
            placeholder={`Note ${idx + 1}`}
            onChange={(e) => updateNote(idx, e.target.value)}
          />
        </div>
      ))}
      <button onClick={()=>{setPage('AgeCalculator')}}>Next</button>
    </div>
  );
};

export default Notes;
