import './App.css'
import CreateArea from './components/CreateArea'
import Header from './components/Header'
import Note from './components/Note'
import { useState } from 'react'

function App() {
  const[noteData, setNoteData]=useState([])

  function onAdd(newNote){
    
   return (newNote.title!=="" || newNote.content!=="")&& setNoteData((prevData)=>{return [...prevData,newNote]})
  }

  function onDelete(id){
    return setNoteData(prevData=>{return prevData.filter((noteitem, index)=>id!==index)})
     
  }
  return (
    <div>
     <Header />
     <CreateArea onAdd={onAdd}/>
  {noteData.map((item,index)=>{return <Note key={index} item={index} onDelete={onDelete} title={item.title} content={item.content}/>})}
    </div>
  )
}

export default App
