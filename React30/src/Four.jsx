import React from 'react'

const Four = () => {
  const items = [Item1, Item2, Item3, Item4,  Item5]
  return (
      <ul>
        {items.map((item,index)=>{
          return <li key={index}>{value}</li>
        })}
      </ul>
  )
}

export default Four


