import React from 'react';


  function CreateTicket() {
    return ( <div className='container'>
      <div className='row mb-5' id="createTicket">
       <h3 className='mt-5 fs-4 mb-5' style={{color:"#424242"}}>To create a ticket, select a relevant topic</h3>

  <div className='col-4' >  
   <h5><i class="fa-solid fa-circle-plus"></i> Account Opening </h5>
 
   <a href="">getting started</a><br/>
   <a href="">Online</a><br/>
   <a href="">Offline</a><br/>
   <a href="">Charges</a><br/>
   <a href="">Company, Partnership and HUF</a><br/>
   <a href="">Non Resident Indian (NRI)</a><br/>
   
  </div>
  <div className='col-4' >
  <h5 className=''><i class="fa-solid fa-user"></i> Your Zerodha account</h5>

   
   <a href=""> Login credentials</a><br/>
   <a href="">Your Profile</a><br/>
  <a href="">Account modification and segment addition</a><br/>
   <a href="">CMR & DP ID</a><br/>
  <a href=""> Nomination</a><br/>
   <a href="">Transfer and conversion of shares</a><br/>
 

  </div>
  <div className='col-4 '  >
  <h5><i class="fa-solid fa-square-poll-vertical"></i> Trending and Markets</h5>

   <a href="">Trading FAQs</a><br/>
   <a href="">Kite</a><br/>
   <a href="">Margins</a><br/>
   <a href="">Product and order types</a><br/>
   <a href="">Corporate actions</a><br/>
   <a href="">kite features</a><br/>
  </div>


  <div className='col-4 mt-5' >
  <h5><i class="fa-solid fa-table-columns"></i> Funds</h5>
  
   
   <a href=""> Fund withdrawal</a><br/>
   <a href="">Adding funds</a><br/>
  <a href="">Adding bank accounts</a><br/>
   <a href="">eMandates</a><br/>
 
  

  </div>
  <div className='col-4 mt-5' >
  <h5><img src="media\assets\top arrow.png " style={{width:"20px"}}/> console</h5>
 
   
   <a href=""> IPO</a><br/>
   <a href="">Portfolio</a><br/>
  <a href="">Funds statement</a><br/>
   <a href="">Profile</a><br/>
  <a href="">Reports</a><br/>
   <a href="">Referral programs</a><br/>
 

  </div>
  <div className='col-4 mt-5' >
  <h5><img src="media\assets\coin.jpg " style={{width:"20px"}}/>  Coin</h5>

   
   <a href=""> Understanding mutual funds and Coin</a><br/>
   <a href="">Coin app</a><br/>
  <a href="">Coin Web</a><br/>
   <a href="">Transactions and reports</a><br/>
  <a href=""> National Pension Scheme (NPS)</a><br/>
   


  </div>
      </div>

    </div> );
  }
  
  export default CreateTicket;