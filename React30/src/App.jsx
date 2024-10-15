// import React from 'react'
// import One from './One'
// import Two from './Two'
// import Three from './Three'
// import Four from './Four'
// import Five from './Five'
// import Six from './Six'


// const App = () => {
//   return (
//     <div>
//      {/* <One/> */}
//       {/* <Two/> */}
//       {/* <Three/> */}
//       {/* <Four/> */}
//       {/* <Five/> */}
//       <Six/>
//     </div>
//   )
// }

// export default App

import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
const [isOnline, setIsOnline] = useState(true)
useEffect(() => {

  function setOnline() {
setIsOnline (true)
  }
function set0ffline() {
setIsonline( false)
}
window. addEventListener( 'online', setOnline)
window. addEventListener('offline', set0ffline)
return (() => {
window. removeEventListener( 'online', setOnline)
window. removeEventListener('offline', set0ffline)
})
},[])
return(
  <>
  <div>{isOnline ? "connected to internet" : "you are offline"}</div>
  </>
)
}
