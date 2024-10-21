// import { useState } from "react";
// const Header = (props) => {
//   const[name,setName]=useState("rohit")
//   let name1="Tony Starc"; //not rerender on change
//   return (
//     <div>
//       <h1>hello {name}</h1>
//       <button onClick={()=>{
//         setName("virat")
//       }}>
//         Change name </button>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      
    </div>
  );
}

export default Counter;

