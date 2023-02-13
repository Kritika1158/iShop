import React from 'react'
import { popularProducts } from '../data'
import Product1 from './Product1'
import './Products.css'
import styled from 'styled-components'

const Heading=styled.h2`
    margin-top:20px;
    text-align:center;
    font-family:Verdana;
    color:#DE3163;
`

const Products = () => {
  return (
    <>
    <Heading>BEST SELLERS</Heading>
    <div class='container'>
        {popularProducts.map((item)=>(
            <Product1 item={item} key={item.id}/>
        ))}

    </div>
    </>
  )
}

export default Products