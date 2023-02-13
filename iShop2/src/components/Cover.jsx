import { DashboardCustomizeRounded, SupportAgent } from '@mui/icons-material'
import React from 'react'
import { FaDollarSign, FaTruckMoving } from 'react-icons/fa'
import './Cover.css'

const Cover = () => {
  return (
    <div><h4 className="Load">Load More</h4>
    <div className="Banner7"><h1 className="Written7">iPhone 12 Plus</h1>
    <h2 className="Performance7">Performance and Design. Taken <br></br> Right to the Edge</h2>
    <h5 className="Loa7">Shop Now</h5>
    <img className="imag7" src="https://pluspng.com/img-png/iphone-hd-png-iphone-in-hand-transparent-png-image-2382.png"/>
    </div>
    <div className="Important"><FaTruckMoving className="Important1"/><FaDollarSign className="Important1"/><img src='https://ishopsktech.netlify.app/static/media/support.4e40b54ebb87af71d5e3c56d422e945e.svg' className="Important1"/></div>
    <div className="Bannerdata"><span className="data">Free Shopping</span><span className="data">100% Refund</span><span className="data">Support 24/7</span></div>
    <div className="Bannerdata1"><span className="data1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    <span className="data1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
    <span className="data1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div>
    </div>
  )
}

export default Cover