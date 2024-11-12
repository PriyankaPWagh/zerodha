import React from 'react';


function Pricing() {
    return (  
        <div className="container p-5">
          <div className="row  p-5">
            <div className="col-5 mt-5">
              <h2>Unbeatable pricing</h2>
              <p className='text-muted'>
                We pioneered the concept of discount broking and price <br/>transparency
                in India. Flat fees and no hidden charges.
              </p>
              <a href="/pricing"  style={{textDecoration:"none" }}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-7 pricing-img ">
              <div className=" col-4 pricing-box">
                <div className='img-p-style'>
                <img src="media\assets\pricing-eq.svg" alt="" style={{width:"50%"}}/>
                <p className='text-muted ' style={{fontSize:"10px",alignSelf:"flex-end"}}>Free account<br/>opening</p>
              </div>
              </div>
              <div className="col-4 pricing-box">
                <div className='img-p-style'>
                <img src="media\assets\pricing0.svg" alt=""  style={{width:"50%"}}/>
                <p className='text-muted ' style={{fontSize:"10px",alignSelf:"flex-end"}}>Free equity delivery<br/>and direct mutual funds</p>
              </div>
              </div>
              <div className=" col-4 pricing-box">
                <div className='img-p-style'>
                <img src="media\assets\other-trades.svg" alt=""  style={{width:"50%"}} />
                <p className='text-muted ' style={{fontSize:"10px",alignSelf:"flex-end"}}>Intraday and<br/>F&amp;O</p>
                </div>
              </div>
            </div>
          </div>
         
        </div>
       ); 


    
}

export default Pricing ;