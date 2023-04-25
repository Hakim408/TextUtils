import React, { useState } from 'react'

export default function Textarea(props) {
    
    const onclick = (()=>{
        console.log("" +Text)
       let newText = Text.toLowerCase()
        setText(newText)
    })
    const onclick1 = (()=>{
        console.log("" +Text)
       let newText = Text.toUpperCase()
        setText(newText)
    })
    const handle =((event)=>{
        // console.log("onChange")
        setText(event.target.value)
    })
    const[Text,setText]= useState('')
    
  return (
   
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}} >
   <div className="mb-1">
        <label forhtml="exampleFormControlTextarea1"  className="form-label">{props.Tarea}</label>
        <textarea className="form-control" value={Text} onChange={handle} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="5"></textarea>
 </div>
   <button onClick={onclick}>submit</button>
   <button onClick={onclick1}>submit1</button>
   <h3>Your Enter word is {Text.split(" ").length}</h3>
   <h4>Your Enter word char is {Text.length}</h4>
   <h2>Preview</h2>
   <p>{Text.length>0?Text:"Enter the word to display here"}</p>
   
   </div> 

    </>
  )
}
