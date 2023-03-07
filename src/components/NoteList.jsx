import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({
	notes,
  AddNoteClick,
	deleteNotes,
}) => {
	return (
		<div className="notes-list">
       {
        notes.map(item => {
          return(
            <Note note={item} key={item.id} deleteNotes={deleteNotes}/>
          )
        })
       }
       <AddNote AddNoteClick={AddNoteClick} />
    </div>
	);
};

export default NotesList;