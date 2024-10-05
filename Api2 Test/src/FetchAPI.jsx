import "./App.css";
import react, { useState, useEffect } from "react";
import axios from "axios";

function FetchAPI() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(false);
  const [view, setView] = useState([]);

  async function APIFetech() {
    const API = await fetch("https://dummyjson.com/products");
    const JSON_DATA = await API.json();
    setProduct(JSON_DATA.products);

    console.log(JSON_DATA);
  }

  const searchProduct = () => {
    if (search == "") {
      setProduct(filtered);
      console.log("hlo")
    } else {
      const filtered = product.filter((data) => {
        return data.title.toLowerCase().includes(search.toLowerCase());
      });
      setProduct(filtered);
    }
  };
  useEffect(() => {
    APIFetech();
  }, []);

  const closeModal = () => {
    setSelectedProduct(false); 
    
  };

  async function viewData(id) {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    setView(res.data);
    setSelectedProduct(true);
    console.log(view);
  }

  return (
    <>
      <div className="container">
        <div>
          <div className="col-8">
            <input
              type="search"
              placeholder="Search item"
              className="form-control"
              onInput={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-4">
            <button onClick={() => searchProduct()} className="btn btn-primery">
              Search
            </button>
          </div>
        </div>

        <div className="row">
          {product.map((item) => (
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.thumbnail} className="card-img-top" alt="..." />

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h3>Rs {item.price}</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="btn">
                  <button className="btn-link" onClick={() => viewData(item.id)}>
                    View Details
                  </button>
                </div>
                
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && view && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{view.title}</h2>
            <img
              src={view.thumbnail}
              alt={view.title}
              height={300}
              width={300}
            />
            <h3>$ {view.price}</h3>
            <p>{view.description}</p>
            <p>Category: {view.category}</p>
            <p>Rating: {view.rating.rate}</p>
          </div>
        </div>
      )}
      </div>
    </>
  );
}

export default FetchAPI;
