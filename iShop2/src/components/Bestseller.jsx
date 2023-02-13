import React,{useState} from 'react'
import './Bestseller.css'
import {Link}from "react-router-dom";

const Bestseller = () => {
    const [click,setClick]=useState(false)
    const [dropdown, setDropdown]=useState(false)
    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)
  return (
    <div><h1 class="Bestseller">BEST SELLER</h1>
    <ul className='nav-menu'>
          <li className='nav-item1'>
            <Link to ='/' className='nav1-link' onClick={closeMobileMenu}>All</Link>
          </li>
          <li className='nav-item1'>
            <Link to ='/' className='nav1-link' onClick={closeMobileMenu}>Mac</Link>
          </li>
          <li className='nav-item1'>
            <Link to ='/' className='nav1-link' onClick={closeMobileMenu}>iPhone</Link>
          </li>
          <li className='nav-item1'>
            <Link to ='/' className='nav1-link' onClick={closeMobileMenu}>iPad</Link>
          </li>
          <li className='nav-item1'>
            <Link to ='/' className='nav1-link' onClick={closeMobileMenu}>iPod</Link>
          </li>
          <li className='nav-item1'>
            <Link to ='/' className='nav1-link' onClick={closeMobileMenu}>Accessories</Link>
          </li>
        </ul></div>
  )
}

export default Bestseller