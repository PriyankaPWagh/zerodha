import React from "react";

function RightSection({
  imageUrl,
  productName,
  ProductDescription,
  learnMore,
}) {
  return (
    <div className="container     productLeftSection  ">
    <div className=" row productLeftSectionexplain ">
      <div className="col"></div>
     
      <div className=" col-5 mt-5 p-5 ">
        <h2 className="mt-5 p-2">{productName}</h2>
        <p>
          {ProductDescription}
          </p>
          <div>
          
         
          <a href={learnMore} style={{ textDecoration: "none", color:"#387ed1"}}>
          {learnMore}<i class="fa-solid fa-arrow-right"></i>
          </a>
          </div>
         
       
      </div>
      <div className="col-5 mt-5 p-3">
        <img
          src={imageUrl}
          alt="product-let img"
          style={{ width: "100%" }}
        />
      </div>
      <div className="col"></div>
    </div>
  </div>
  );
}

export default RightSection;
