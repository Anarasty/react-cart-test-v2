import React from 'react'
import '../styles/navbar.css'
const Navbar = ({size}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop'>
                Test_shop
            </span>
            <div className='cart'>
                <span>
                    <i class="fas fa-shopping-cart"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar