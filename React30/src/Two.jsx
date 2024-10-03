import React, { useState } from 'react'

const Two = () => {
    const[count,setCount] = useState(0);

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Two
