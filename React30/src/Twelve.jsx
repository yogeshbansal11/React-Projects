// import React, { useState } from 'react'
// // import { ImGift } from 'react-icons/im';

// const Twelve = () => {
//   const[file,setFile] = useState(null);
//   const handleFileChange = (e) =>{
//     const selectedfile = e.target.files[0];
//     setFile(selectedfile)
//   }
//   return (
//     <div>
//       <input type="file" accept='image/*' onChange={handleFileChange} />
//       {file &&  <img src={URL.createObjectURL(file)} alt='uploaded'}
//     </div>
//   )
// }

// export default Twelve


import React, { useState } from 'react';
// import { ImGift } from 'react-icons/im';

const Twelve = () => {
  const [file, setFile] = useState(null);
  
  const handleFileChange = (e) => {
    const selectedfile = e.target.files[0];
    setFile(selectedfile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="uploaded" />}
    </div>
  );
};

export default Twelve;
 