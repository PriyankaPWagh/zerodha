import React from "react";
import OpenAccount from "../Openaccount";

function Hero() {
  return (
    <div className="container mt-5 p-5 ">
      <div className="row text-center mt-5  ">
        <h1 style={{color:"#424242"}}>Pricing</h1>
        <p className="mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      <div className="row border-top border-bottom mt-5 p-5">
        <div className="col-4 p-5 mt-5">
          <img
            src="media\assets\pricing0.svg"
            alt="pricing img "
            style={{ width: "80%" }}
          />
          <h3 className="mb-3 mt-4">Free equity delivery</h3>
          <p className="mt-2 text-muted">
            All equity delivery investments (NSE,BSE) <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 p-5 mt-5 ">
          <img
            src="\media\assets\other-trades.svg"
            alt="pricing img "
            style={{ width: "80%" }}
          />
          <h3 className="mb-3 mt-4">Intraday and F&O trades</h3>
          <p className="mt-2 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower)
            <br /> &nbsp;  &nbsp; per executed order on intraday trades <br /> across equity,
            currency, and commodity <br />
            &nbsp;  &nbsp; trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 p-5 mt-5">
          <img
            src="media\assets\pricing0.svg"
            alt="pricing img "
            style={{ width: "80%" }}
          />
          <h3 className="mb-3 mt-4">Free direct MF</h3>
          <p className="mt-2 text-muted">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP
            <br />
           &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; charges.
          </p>
        </div>
      </div>
      <OpenAccount/>
    </div>
  );
}

export default Hero;
