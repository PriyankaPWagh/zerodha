import React from 'react';
  

function Brokerag() {
    return ( <div className='container'>
     <div className='row '>
     <div className='col-1  '></div>
      <div className='col-6 '>
      
        <div className=' mb-4 text-center p-2' style={{marginRight:"3rem"}}>
            <a href='' style={{textDecoration:"none", fontSize:"20px",color:"#387ed1"}} >Brokerage Calculator</a>
        </div>
       
       <ul style={{fontSize:"11px",lineHeight:"2",fontWeight:"600",color:"#666666" ,marginLeft:"5rem"}} className=' p-2'>
       <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
       <li>Digital contract notes will be sent via e-mail.</li>
       <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
       <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
       <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
       <li>If the account is in debit balance,any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li> 
       </ul>
      </div>
      <div className='col-5'>
      <div className='text-center fs-6'>
            <a href='' style={{textDecoration:"none",color:"#387ed1"}} >List of charges</a>
        </div>
      </div>


     </div>


    </div> );
}

export default Brokerag;