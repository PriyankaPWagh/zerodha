import React from "react";

function LeftSection({
  imageUrl,
  productName,
  ProductDescription,
  tryDemo,
  learnMore,
  googlepPlay,
  appStore,
 
}) {
  return (
    <div className="container     productLeftSection  ">
      <div className=" row productLeftSectionexplain ">
        <div className="col"></div>
        <div className="col-5 mt-5 p-3">
          <img
            src={imageUrl}
            alt="product-let img"
            style={{ width: "100%" }}
          />
        </div>
        <div className=" col-5 mt-5 p-5 ">
          <h2>{productName}</h2>
          <p>
            {ProductDescription}
            </p>
            <div>
            <a href={tryDemo }style={{ textDecoration: "none",color:"#387ed1"}}>
              {tryDemo} <i class="fa-solid fa-arrow-right"></i>
            </a>
           
            <a href={learnMore} style={{ textDecoration: "none", marginLeft:"50px" ,color:"#387ed1"}}>
            {learnMore}<i class="fa-solid fa-arrow-right"></i>
            </a>
            </div>
            <div className="mt-4 ">
              <a href={googlepPlay}><img src="media\assets\google-play-badge.svg" alt="apple badge" /></a>
             
              <a href={appStore}> <img src="media\assets\appstoreBadge.svg" alt="apple badge"  style={{marginLeft:"50px" }}/></a>
            </div>
         
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default LeftSection;
