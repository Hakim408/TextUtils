
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';


function App() {
  const[mode,setMode]=useState('light')
  const darkMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='#144270'
    }else{
      setMode('light')
      document.body.style.backgroundColor ='white'
    }

  }
  return (
    <> 
  
    <Navbar title= "TextModify" main ="Home" mode ={mode} darkMode={darkMode}/>
    <Textarea Tarea ="Enter the word" mode ={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
