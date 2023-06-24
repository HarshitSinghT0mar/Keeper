import React from 'react'

const Note = (props) => {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>props.onDelete(props.item)}>Delete</button>
    </div>
  )
}

export default Note