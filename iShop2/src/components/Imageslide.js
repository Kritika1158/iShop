import React from 'react'
import { useState } from 'react'
const Imageslide = ({slides}) => {
    const [currentIndex,setCurrentIndex]=useState(0);

    const sliderStyles={
        height:'100%',
        position:'relative',
        paddingBottom:'50px',
       
    }
    const slideStyles={
        width:'200px',
        height:'150px',
        // borderRadius:'10px',
        backgroundPosition:'center',
        backgroundImage:`url(${slides[currentIndex].url})`,

        // boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
        
    }
    
    
    const outerDiv={
        height:'200px',
        width:'400px',
        // boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
        // backgroundColor:'#377D71',
       // boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        padding:"30px 10px 20px 10px",
        marginLeft:'-50px',
        marginTop:'-20px',
        display:'flex',
        borderRadius:'20px'
    }
    const leftArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        left:'-150px',
        fontSize:'45px',
        color:'black',
        zIndex:1,
        cursor:'pointer',
        fontWeight:'700'
    }
    const rightArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        right:'-150px',
        fontSize:'45px',
        color:'black',
        zIndex:1,
        cursor:'pointer',
        fontWeight:'700'
    }

    const titleStyle={
        marginLeft:'70px',
        fontSize:'23px'
    }

    const starImg={
        height:'50px',
        width:'150px'
    }
    const goToPrevious=()=>{
        const isFirstSlide= currentIndex===0
        const newIndex=isFirstSlide?slides.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
    };

    const goToNext=()=>{
        const isLastSlide= currentIndex===slides.length-1;
        const newIndex=isLastSlide?0:currentIndex+1;
        setCurrentIndex(newIndex);
    }
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>&lt;</div>
        <div style={rightArrowStyles} onClick={goToNext}>&gt;</div>
        <div style={outerDiv}>
        <div style={slideStyles}></div>
        <div style={titleStyle}>{slides[currentIndex].title}
        <div><img style={starImg} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aR3So8RS4N8EUBvRyCK_4O1d8eegdDJuYA&usqp=CAU"/></div>
        <div style={{color:'red',marginLeft:'40px'}}><p>$699</p></div>
        </div>
        </div>
    </div>
  )
}

export default Imageslide