import  { useState } from 'react'

const useCustomHook = () => {
    const [backGroundColor,setBackgroundcolor]=useState("black");
    const [toggle,setToggle]=useState("Switch to Light Mode");
    const [color,setColor]=useState("white");

    const handleToggle=()=>{
        if(backGroundColor=="white" ){
            setBackgroundcolor("black");
            setToggle("Switch to Light Mode")
            setColor("white")
        }else if(backGroundColor=="black" ){
            setBackgroundcolor("white");
            setToggle("Switch to Dark Mode")
            setColor("black")
        }
    }
  return {backGroundColor,toggle,handleToggle,color}
}

export default useCustomHook

