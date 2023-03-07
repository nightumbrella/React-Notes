import React, { useEffect, useState } from "react";
import NotesList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is first test",
      date: "15/03/2025",
    },
    {
      id: nanoid(),
      text: "This is first test",
      date: "17/03/2025",
    },
    {
      id: nanoid(),
      text: "This is first test",
      date: "25/03/2025",
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);


  const [filterText, setFilterText] = useState("");

  const AddNoteClick = (text) => {
    let date = new Date();
    setNotes([
      ...notes,
      {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
      },
    ]);
  };

  const deleteNotes = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearchNote={setFilterText} />
      <NotesList
        notes={notes.filter((item) =>
          item.text.toLowerCase().includes(filterText)
        )}
        AddNoteClick={AddNoteClick}
        deleteNotes={deleteNotes}
      />
    </div>
  );
};

export default App;
