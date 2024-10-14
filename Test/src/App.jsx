import React from 'react'
import useCustomHook from '../hook/customHooks';
import usegridCustomhook from '../hook/grid';

const App = () => {
  const {handleToggle,backGroundColor,toggle,color}=useCustomHook();
  const {handleDisplay,display}=usegridCustomhook();
  return (
    <div style={{backgroundColor:`${backGroundColor}`,width:"100vw",height:"100vh",color:`${color}`}}>
    <button onClick={()=>handleToggle()}>{toggle}</button>
    <div>
    <ul style={{display:`${display}`,gap:"10px",listStyle:"none"}}>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
    <button onClick={()=>handleDisplay()}>Change Display</button>
    </div>
    </div>
  )
}

export default App
