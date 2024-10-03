import React from 'react'
import { useParams } from 'react-router-dom'

const Single_page = () => {
    const {id} = useParams();
    
  return (
    <div>Single_page</div>
  )
}

export default Single_page