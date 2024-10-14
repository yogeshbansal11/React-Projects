import React, { useState } from 'react'

const usegridCustomhook = () => {
    const [display,setDisplay]=useState("flex");
    const handleDisplay=()=>{
        if(display=="flex"){
            setDisplay("block");
        }else if(display=="block"){
            setDisplay("flex")
        }
    }
  return {display,handleDisplay};
}

export default usegridCustomhook