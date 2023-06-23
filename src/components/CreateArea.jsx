import React, { useState } from 'react'

const CreateArea = () => {
    const[note, setNote]=useState({title:"",content:""})
    const[noteData, setNoteData]=useState([])

    function inputChange(event){
const inputTitle=event.target.value;
return setNote((prevNote)=>{return {...prevNote,title: inputTitle}})
}

function textChange(event){
        const inputText=event.target.value;
        return setNote((prevNote)=>{return {...prevNote,content: inputText}})

    }
    function addNote(e){
        e.preventDefault();
        return setNoteData((prevData)=>{return [...prevData,note]})
        
    }
  return (
    <div>
      <form>
      <input onChange={inputChange}type="text" placeholder='Title' value={note.title}/>
        <textarea onChange={textChange} placeholder='Take a note...'value={note.content}></textarea>
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
