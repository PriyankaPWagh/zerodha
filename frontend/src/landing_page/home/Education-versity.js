import React from "react";

function EducationVersity() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media\assets\education.svg" style={{ width: "70%" }} />
        </div>
        <div className="col-6">
          <h1 className="fs-4 ">Free and open market education</h1>
          <br />
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            versity <i class="fa-solid fa-arrow-right"></i>
          </a>
          <br /> <br />
          <p>
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/pricing" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EducationVersity;
