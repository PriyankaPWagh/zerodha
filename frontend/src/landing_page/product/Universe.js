import React from 'react';
import { Link } from "react-router-dom";
function Universe() {
    return ( 
       <div className='container mt-5'>
        <div className='row text-center'>
          <h1>The Zerodha Universe</h1>
          <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
     <div className='col-4 mt-3 p-3'>
      <img src='media\assets\zerodhaFundhouse.png' style={{width:"40%"}}/>
      <p  className='mt-3 ' style={{fontSize:"12px"}}>Our asset management venture<br/>
that is creating simple and transparent index<br/>
funds to help you save for your goals.
</p>
     </div>
     <div className='col-4 mt-3 p-3'>
      <img src='media\assets\sensibullLogo.svg' style={{width:"40%"}}/>
      <p  className='mt-3' style={{fontSize:"12px"}}>Options trading platform that lets you<br/>
create strategies, analyze positions, and examine<br/>
data points like open interest, FII/DII, and more.

</p>
     </div>
     <div className='col-4 mt-3 p-3 '>
      <img src='media\assets\tijori.svg' style={{width:"40%",}}/>
      <p className='mt-3' style={{fontSize:"12px"}}>Investment research platform<br/>
that offers detailed insights on stocks,<br/>
sectors, supply chains, and more.

</p>
     </div>
     <div className='col-4 mt-5  p-3'>
      <img src='media\assets\streakLogo.png' style={{width:"40%"}}/>
      <p className='mt-3' style={{fontSize:"12px"}}>Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategic without coding.
</p>
     </div>
     <div className='col-4 mt-5  p-3'>
      <img src='media\assets\smallcaseLogo.png' style={{width:"40%"}}/>
      <p  className='mt-3' style={{fontSize:"12px"}}>Thematic investing platform<br/>
that helps you invset in diversatisfied<br/>
basket of stacks on ETFs.
</p>
     </div>

     <div className='col-4 mt-5 p-3'>
      <img src='media\assets\dittoLogo.png' style={{width:"40%"}}/>
      <p  className='mt-3' style={{fontSize:"12px"}}>Personalized advice on life<br/>
and health insurance. No spam<br/>
and no mis-selling.

</p>
     </div>
    

     <button
          className="p-2 btn fs-6 opn-account-btn mb-5"
          style={{
            width: "15%",
            margin: "0 auto",
            backgroundColor: "#387ed1",
            color: "#fff",
            borderRadius: "3px",
          }}
        >
         <Link to={"http://localhost:3000/signup"} style={{textDecoration:"none",color:"white"}}>Sign up for free</Link>  
        </button>
        </div>
       </div>

    );
}

export default Universe;