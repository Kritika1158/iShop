import { Badge } from '@material-ui/core';
import { Search, ShoppingBasketOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Navbar.css'

const Container=styled.div`
    height:60px;
    `;
const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    `;
const Left=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    `;
const Language=styled.div`
    font-size:14px;
    cursor:pointer;
    `    
const SearchContainer=styled.div`
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    `    
const Input=styled.input`
    border:none;
    `  

const Centre=styled.div`
    flex:1;
    text-align:center;
    `;

const Logo=styled.h1`
    font-weight:bold;
    color:#DE3163;
    `;

const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    `;

const MenuItem=styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    `

const Navbar = () => {
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)
  const closeMobileMenu=()=>setClick(false)
  return (
    <div>
    <Container><Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
        </Left>
        <Centre>
            <Logo>iSHOP</Logo>
        </Centre>
        <Right>
            <Link to='/register' className='nav-links'><MenuItem>Register</MenuItem></Link>
            <Link to='/login' className='nav-links'><MenuItem>Sign In</MenuItem></Link>
            <MenuItem>
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined/>
            </Badge>
                </MenuItem>
        </Right>
        </Wrapper></Container>
        <nav className="Navbar-3-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to ='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
          </li>
          <li className='nav-item'>
            <Link to ='/store' className='nav-links' onClick={closeMobileMenu}>STORE</Link>
          </li>
          <li className='nav-item'>
            <Link to ='/iphone' className='nav-links' onClick={closeMobileMenu}>IPHONE</Link>
          </li>
          <li className='nav-item'>
            <Link to ='/ipad' className='nav-links' onClick={closeMobileMenu}>IPAD</Link>
          </li>
          <li className='nav-item'>
            <Link to ='/macbook' className='nav-links' onClick={closeMobileMenu}>MACBOOK</Link>
          </li>
          <li className='nav-item'>
            <Link to ='/accessories' className='nav-links' onClick={closeMobileMenu}>ACCESSORIES</Link>
          </li>
        </ul>
      </nav>
      </div>
  )
}

export default Navbar