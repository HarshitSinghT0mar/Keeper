import "./App.css";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";
import Note from "./components/Note";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [noteData, setNoteData] = useState([]);

  function onAdd(newNote) {
    return (
      (newNote.title !== "" || newNote.content !== "") &&
      setNoteData((prevData) => {
        return [...prevData, newNote];
      })
    );
  }

  useEffect(() => {
   noteData.length&& localStorage.setItem("Notes", JSON.stringify(noteData));
  }, [noteData]);

  function onDelete(id) {
    setNoteData((prevData) => {
      const updatedNotes = prevData.filter((noteItem, index) => id !== index);
      localStorage.setItem("Notes", JSON.stringify(updatedNotes));
      return setNoteData(updatedNotes);
    });
  }
  window.onload = () => {
    const storedNotes = JSON.parse(localStorage.getItem("Notes"));
    console.log(storedNotes);
    storedNotes && setNoteData(storedNotes);
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {noteData &&
        noteData.map((item, index) => {
          return (
            <Note
              key={uuidv4()}
              itemNo={index}
              onDelete={onDelete}
              title={item.title}
              content={item.content}
            />
          );
        })}
    </div>
  );
}

export default App;
