import React from 'react'
import './Featured.css'
import Imageslide from './Imageslide';
const Featured = () => {
  const slides=[
    {url:'https://www.freepngimg.com/thumb/ipad/30300-5-ipad-transparent-picture.png',title:'Apple iPod'},
    {url:'https://www.pngarts.com/files/8/White-Airpod-PNG-Image.png',title:'Apple Airpodes'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwmOQBOpXk-w1S0geRYOZnGQ2ge7B1Fw6sw&usqp=CAU',title:'Netatmo Rain Gauge'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9r7CPnJ8oS4FEO8fyg_TFpInsqqsMJceRg&usqp=CAU',title:'Magsafe Charger'},
    {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqmeiSspZphw5nhxbb93TGEo7ahizN1lSphw&usqp=CAU',title:'MagSafe Battery Pack'}
];

const containerStyles={
    width:'300px',
    height:'200px',
    margin:'0 auto'

};

const mainStyle={
    
    width:'100%',
    height:'300px',
    paddingTop:'50px'
}
  return (
    <div><h1 class="Featured">Featured Products</h1>
    <div style={mainStyle}>
        <div style={containerStyles}>
        <Imageslide slides={slides}/>
        </div>
    </div>

    <div className="Bannerdata3"><span className="data2 ishop">iSHOP</span><span className="data2">Follow Us</span><span className="data2">Contact Us</span></div>
    <div className="Bannerdata4"><span className="data3 dat3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    <span className="data3 dat4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       <br></br> <img className="facebook" src="https://ishopsktech.netlify.app/static/media/facebook.d4974d9b790e23020e4de40f35cd9b7d.svg"/><img className="facebook" src="https://ishopsktech.netlify.app/static/media/twitter.90e80072e0fca31cca6d47dfbb193315.svg"/></span>
    <span className="data3 dat5">iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</span></div></div>
  )
}

export default Featured