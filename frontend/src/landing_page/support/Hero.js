import React from "react";

function Hero() {
  return (
    <section
      className=" container-fluid "
      style={{ backgroundColor: "#387ed1", height: "470px" }}
    >
      <div className="p-5  " id="supperHeroWrapper">
        <h5>Support Portal</h5>

        <a href=""> Track tickets</a>
      </div>
      <div className="row  " id="heroInfo">
        <div className="col-7 p-2 ">
          <h5>Search for an answer or browse help topics to create a <br/>ticket</h5>

          <div style={{ display: "flex" }} className="mt-5">
            <input
              placeholder="Eg : How do i activated F & O,Why is my order getting rejected ..."
              style={{
                width: "600px",
                height: "55px",
                border: "none",
                borderRadius: "5px",
              }}
              className="p-3"
            />
            <i
              class="fa-solid fa-magnifying-glass"
              style={{
                height: "55px",
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "white",
                color: "#666666",
                borderRadius: "3px",
              }}
            ></i>
          </div>
          <div className="supportHeroanchor mt-3 ">
            <p>
              <a href="">Track account opening</a>
            </p>
            <p>
              <a href="">Track Segment activation</a>
            </p>
            <p>
              <a href="" className="">
                Intraday Margine
              </a>{" "}
            </p>
          </div>
          <div className="KiteAnchorTagStyling ">
            <p>
              <a href="">Kite users manual</a>
            </p>
          </div>
        </div>
        <div className="col-5 featuredAlert">
      
          <h5 className="">Featured</h5>
         
           <p> Due to the settlement holiday on Monday,your account balance will
            not include the following credits on 16 September, 2024:</p>
            <ul className="featureAlertUl">
            <li>Intraday
            profits made in the Equity segment on Sept 13, 2024.</li> 
            
            <li>Credits from
            trades made in NFO, Currency, and Commodity derivatives on Sept 13,
            2024. 
           This will include options premium credits, futures M2M
            profits, etc. Read more.</li> 
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
