import React, { useState } from "react";

const AddNote = ({ AddNoteClick }) => {
  const [noteText, setNoteText] = useState("");
  let remaining = 200;
  const handleChange = (e) => {
    if (e.target.value.length <= remaining) {
      setNoteText(e.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.split() <= 0) {
      console.log("enter any text");
    } else {
      AddNoteClick(noteText);
      setNoteText("");
    }
  };

 

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{remaining - noteText.trim().length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
