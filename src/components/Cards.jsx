import React from 'react'
import '../styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, author, price, image} = item;
  return (
    <div className='cards'>
        <div className='image_box'>
          <img src={image} alt='IMAGE'/>
        </div>
        <div className='details'>
          <p>{title}</p>
          <p>{author}</p>
          <p>Price - {price}$</p>
          <button onClick={()=>handleClick(item)}>Add cart</button>
        </div>
    </div>
    
  )
}

export default Cards