import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  ">
        <h2 className="text-center" style={{ color: "#424242" }}>
          People
        </h2>
      </div>
      <div
        className="row   p-5 "
        
      >
     
        <div className="col-5 text-center">
          <img
            src="media\assets\nithinKamath.jpg"
            alt="team "
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5>Nithin Kamath</h5>
          <p>Founder, CEO</p>

               </div>

       
        <div className="col-5 mt-3 fs-6 teamhistory" >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the

            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p> <p> Playing basketball is
            his zen.</p>  <p>Connect on <a href="/"> Homepage</a>  / <a href="/"> TradingQnA</a> /<a href="/"> Twitter</a>
          </p>
        
        </div>
 
      </div>
      </div>
        
  );
}

export default Team;
