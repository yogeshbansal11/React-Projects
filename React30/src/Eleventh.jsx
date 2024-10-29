import React from 'react'

const Eleventh = () => {

  let quotes=["All our dreams can come true, if we have the courage to pursue them.","The future belongs to those who believe in the beauty of their dreams.","Dreams come true.","Dream as if you'll live forever.","Some men see things as they are and say why."]

  const randomQuotes = Math.floor(Math.random()*quotes.length) 
  const quote = quotes[randomQuotes]
  return (
    <div>
      {quote}
    </div>
  )
}

export default Eleventh
