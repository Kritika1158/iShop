import { Circle, FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, Star, StarBorder } from '@mui/icons-material'
import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
const Product1 = ({item}) => {
  return (
    <div class='Container'><div className='Circle'/><img src={item.img} className="Image"></img>
    <div className='Info'><Link to='/cart'><div className='Icon'><ShoppingCartOutlined/></div></Link>
    <Link to='/product'><div className="Icon"><SearchOutlined/></div></Link>
    <div className='Icon'><FavoriteBorderOutlined/>
    </div></div></div>
  )
}

export default Product1