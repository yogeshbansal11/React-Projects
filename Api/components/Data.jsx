// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// function Data() {
//   const [fetch, setFetch] = useState([]);
//   const [loading, setloading] = useState(true);
//   // const filtered = list.filter((item) => {
//   //   return item.toLowerCase().includes(search.toLowerCase())
//   // })

//   async function fetchData() {
//     const res = await axios.get("https://fakestoreapi.com/products");
//     setFetch(res.data);
//     setloading(false)
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);
//   console.log(fetch);

//   return (
//     <div className="main">
//       <div className="row">
//         {loading ? (<h1>Loading...</h1>) : ( 
//           fetch.map((item, i) => (
//             <div className="card" key={i} style={{ width: "20rem" }}>
//               <LazyLoadImage
//                 src={item.image}
//                  effect="blur"
//                 className="card-img-top"
//                 alt="..."
//                 height={300}
//                 // width={200}
//               />
  
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <h3>$ {item.price}</h3>
//                 <h6>Rating: {item.rating.rate}</h6>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//                 {/* <a href="#" className="btn btn-primary">
//                   Go somewhere
//                   </a> */}
//               </div>
//             </div>
//           ))
//         )}
        
//       </div>
//     </div>
//   );
// }

// export default Data;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Data() {
  const [fetch, setFetch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Search, setSearch] = useState("");
  const [Sort, setSort] = useState("");

  async function fetchData() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setFetch(res.data);
    setLoading(false);
    console.log(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Filter = fetch.filter((item) => {
    return (
      item.title?.toLowerCase().includes(Search?.toLowerCase() || '') ||
      item.description?.toLowerCase().includes(Search?.toLowerCase() || '') ||
      item.category?.toLowerCase().includes(Search?.toLowerCase() || '')
    );
  });


  const Sorttest = () => {
    if (Sort == "a") {
      return [...Filter].sort((a, b) => a.price - b.price);
    }
    if (Sort == "b") {
      return [...Filter].sort((a, b) => b.price - a.price);
    }
    return Filter;
  };

  return (
    <div className="main">
      <input type="search" onInput={(e) => setSearch(e.target.value)} />
      <button onClick={() => setSort("a")}>Low to high</button>
      <button onClick={() => setSort("b")}>High to low</button>
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          Sorttest() &&
          Sorttest().map((item, i) => (
            <div className="card" key={i} style={{ width: "20rem" }}>
              <LazyLoadImage
                src={item.image}
                effect="blur"
                className="card-img-top"
                alt="..."
                height={300}
                // width={200}
              />

              {/* <img src={item.image} className="card-img-top" alt="..." height={300} width={200} /> */}

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h3>$ {item.price}</h3>
                <h6>Rating: {item.rating.rate}</h6>
                <p className="card-text">
                  {item.description}
                </p>
                {/* <a href="#" className="btn btn-primary">
                Go somewhere
                </a> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Data;