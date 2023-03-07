import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({note,deleteNotes}) => {
  const id = note.id
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" onClick={() =>deleteNotes(id)} />
      </div>
    </div>
  );
};

export default Note;
