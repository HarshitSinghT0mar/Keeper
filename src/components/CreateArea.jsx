import React, { useState } from 'react'

const CreateArea = (props) => {
    const[note, setNote]=useState({title:"",content:""})
   

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
        props.onAdd(note);
       
        return  setNote({title: "",content:""})
        
        
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
