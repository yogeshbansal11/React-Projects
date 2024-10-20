import { useState } from "react";

const data = ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/800px-Altja_j%C3%B5gi_Lahemaal.jpg",
  "https://media.licdn.com/dms/image/D4E12AQG0hyhZmq0AyQ/article-cover_image-shrink_600_2000/0/1700488940348?e=2147483647&v=beta&t=eZtDe_xSbm65L-mR1tnM8vnfMpM3aWcSe8rw8o7sjSs",
  "https://static.vecteezy.com/system/resources/thumbnails/024/669/489/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-5-photo.jpeg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn-X2ZRRr7DWK4gEnkQFFo_NSpS4dxoS-gg&s"];

const Imageslider=()=>{
  const[active,setActive]= useState(0)

  const handleNextclick=()=>{
    setActive(active+1);
  }

  const handlePrevclick=()=>{
    setActive(active-1);
  }
   return(
    <div>
      <button onClick={handlePrevclick}>Previous</button>
      <img src= {data[active]} />
      <button onClick={handleNextclick}>Next</button>
    </div>
   )
}

export default Imageslider

