import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [expression,setExpression]=useState("");
  const handleClick=(e)=>{
    if(e.target.innerText==="x"){
        setExpression((prev)=>prev + "*");
   }
  else{
    setExpression((prev)=>prev + e.target.innerText);
  }
}

  return (
    <>
      
      <div className='main-section'>
        <h2>Calculator for Basic Airthmetic operation</h2> 
        <input className='input-field' value={expression}/>
        <div className='main-div'>
          <div className='icons' onClick={handleClick}>7</div>
          <div className='icons' onClick={handleClick}>8</div>
          <div className='icons' onClick={handleClick}>9</div>

          <div className='symbol' onClick={handleClick}>+</div>

          <div className='icons' onClick={handleClick}>4</div>
          <div className='icons' onClick={handleClick}>5</div>
          <div className='icons' onClick={handleClick}>6</div>

          <div className='symbol' onClick={handleClick}>-</div>

          <div className='icons' onClick={handleClick}>1</div>
          <div className='icons' onClick={handleClick}>2</div>
          <div className='icons' onClick={handleClick}>3</div>

          <div className='symbol' onClick={handleClick}>x</div>

          <div className='clear' onClick={() => setExpression('')}>C</div>
          <div className='icons' onClick={handleClick}>0</div>
          <div className='equal-to' onClick={()=>setExpression(eval(expression))}>=</div>          
          <div className='symbol' onClick={handleClick}>/</div>
       </div>
      </div>
    </>
  )
}

export default App
