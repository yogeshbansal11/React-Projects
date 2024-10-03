// import React from 'react'

// const Five = () => {
//   return (
//     <div>
//       <label>
//         <input type='checkbox' />
//       </label>
//     </div>
//   )
// }

// export default Five

// import React, { useState } from "react";
// export default function Five() {
//   const [isToggled, setIsToggles] = useState(false);
//   const handleToggle = () => {
//     setIsToggles(!isToggled);
//   };
//   return (
//     <div>
//       <label>
//         <input type="checkbox" onChange={handleToggle} />
//       </label>
//       <p>{isToggled ? On : OFF}</p> |
//     </div>
//   );
// }


import React, { useState } from "react";

export default function Five() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
        Toggle
      </label>
      <p>{isToggled ? "On" : "OFF"}</p> {/* Use quotes for strings */}
    </div>
  );
}
