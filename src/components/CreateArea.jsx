import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateArea = (props) => {
    const[note, setNote]=useState({title:"",content:""})
    const [showtext,setShowText]=useState(false)
   

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
        setShowText(false)
        return  setNote({title: "",content:""})
        }

        function handleClick(){
        return setShowText(true);
        }
  return (
    <div>
      <form>
      <input onChange={inputChange} onClick={handleClick} type="text" placeholder='Title' value={note.title}/>
       {showtext && <><textarea onChange={textChange} placeholder='Take a note...'value={note.content}> </textarea>
       <button onClick={addNote}><AddCircleIcon /></button></>}
       
      </form>
    </div>
  )
}

export default CreateArea
