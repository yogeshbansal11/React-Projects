
import React, { useEffect, useState } from 'react';

const Six = () => {
  const [data, setData] = useState(null);

  async function name(params) {
    
  }

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error('Error fetching data:', error)); // Optional: handle fetch errors
  // }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Six;

