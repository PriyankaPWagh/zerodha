import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container text-center">
      <div className="row">
        <h1 className="mt-5 fs-3" style={{ color: "#424242" }}>
          Open a Zerodha account
        </h1>
        <p style={{ color: "#666" }} className="mb-2  p-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn fs-6 opn-account-btn"
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

export default OpenAccount;
