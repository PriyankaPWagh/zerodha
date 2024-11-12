import React from "react";

function Hero() {
  return (
    <div className="productHero text-center border-bottom">
      <div className="productheading ">
        <h1 className="mb-3 mt-5" style={{color:"#424242"}}>Technology</h1>
        <h5 className="mb-3" style={{color:"#424242"}}>Sleek, modern, and intuitive trading platforms</h5>
        <p className="mb-3">
          Check out our{" "}
          <a href="/#" style={{ textDecoration: "none",color:"#387ed1" }}>
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
   
    </div>
  );
}

export default Hero;
