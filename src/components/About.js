import React, { useState } from 'react'

export default function About() {
    const [myStyle,setMyStyle]= useState({
        color:'black',
        backgroundColor:'white'
    })
    const[btnText,setBtnText] = useState("Enable Dark Mode")
    const click =(()=>{
      //  console.log("Bhoom!!")
      if(myStyle.color=== 'black'){
        setMyStyle({
            color:'white',
            backgroundColor : 'black'
        })
        setBtnText("Enable Light Mode")
      }else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode")
      }

    })
  return (
    
    <>
      <div className = 'container' style={myStyle}>
        <h2>About Us</h2>
        Hello I am about us page.
        Nice to meet You
        You can check this website.
      </div>
      <div className='container mx-10'>
      <button onClick={click} className='btn btn-primary' type='Button'>{btnText}</button>
      </div>
    </>
  )
}
