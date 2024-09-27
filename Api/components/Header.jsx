import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderData from './HeaderData'

const Header = () => {
const [data ,setData] = useState([]);

useEffect(()=>{
  setData(HeaderData);

},[])
console.log(data);
  return (
    <>
      <div className="header-main">
        <ul className="list">
         {HeaderData.map((item,i)=>
          <li key={i}>
            <Link className=" nav-link" to={item.href}>
              {item.title}
            </Link>
          </li>
          )}
          {/* <li>
            <Link className="active nav-link" to={"/about/"}>
            About
            </Link>
          </li>
          <li>
            <Link className="active nav-link" to={"/blog"}>
            Blog
            </Link>
          </li>
          <li>
            <Link className="active nav-link" to={"/items"}>
            Items
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
