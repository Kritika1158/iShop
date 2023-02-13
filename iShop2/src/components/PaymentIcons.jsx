import React from "react";
import './PaymentIcons.css'
const PaymentIcon = () => {
  return (
    <>
      <div className="payMentIcon">
        <img src='https://ishopsktech.netlify.app/static/media/master.aba3bc35e15c750f863781b45fe6090e.svg' alt="visa" className="paymentImg" />
        <img src='https://ishopsktech.netlify.app/static/media/wastern.28e3101f6c3357fa5652e4f48d55c1b1.svg' alt="paypal" className="paymentImg" />
        <img src='https://ishopsktech.netlify.app/static/media/paypal.8e2a61bf462cd6cc1ff00c3e107b370c.svg' alt="wastern" className="paymentImg" />
        <img src='https://ishopsktech.netlify.app/static/media/master.aba3bc35e15c750f863781b45fe6090e.svg' alt="master" className="paymentImg" />
      </div>
    </>
  );
};

export default PaymentIcon;