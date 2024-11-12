import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container p-5  mt-5">
      <div className="row text-center">
        <img
          src="media\assets\homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{ width: "70%", margin: "0 auto" }}
        />

        <h1 className="mt-3">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
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

export default Hero;
