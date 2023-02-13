import StripeCheckout from "react-stripe-checkout";
import { useState,useEffect } from "react";
import axios from "axios";
const KEY=pk_test_51Mavi5SHxMzxTrRKAGdvBidOy28xQDtFfXglADHm2DG8SgNb4Rq9bdssyBnAD2POeMTtQd6nlIw9QPWlxWCOjLcF00E7TJVUEL
const Pay=()=>{

    const [stripeToken,setStripeToken]=useState(null)    
    const onToken=(token)=>{
        setStripeToken(token);
    };

useEffect(()=>{
    const makeRequest=async()=>{
        try{
         const res=await axios.post("http://localhost:5000/api/checkout/payment",
         {
            tokenId: stripeToken.id,
            amount:2000,
         }
         );
         console.log(res.data);
        }catch(err){
            console.log(err)
        }
    };
    stripeToken && makeRequest();
},[stripeToken]);
    return(
        <div style={{
            height:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >
            {stripeToken ? (<span>Processing. Please wait...</span>):(
            <StripeCheckout
                name="iShop"
                image=""
                billingAddress
                shippingAddress
                description="You total is $20"
                amount={2000}
                token={onToken}
                stripeKey={KEY}>

            <button style={{
                border:"none",
                width:120,
                borderRadius:5,
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"600",
                cursor:"pointer",
            }}>Pay Now</button>
                </StripeCheckout>)}
        </div>
    );
};

export default Pay;