import { ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { sliderItems } from '../data'

const Container=styled.div` 
    width:100%;
    height:76vh;
    display:flex;
    position:relative;
    overflow:hidden;
    `

const Arrow=styled.div`
    width:50px;
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:-25%;
    bottom:0;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index: 2;

`

const Wrapper=styled.div`
  height=100%;
  display:flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  `;

const Slide=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;`;

const ImgContainer=styled.div`
  height:100%;
  flex:1;`;

const Image=styled.img`
  height:70%;
  `;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    
  };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosOutlined/>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlined/>
      </Arrow>
    </Container>
  )
}

export default Slider