import React from "react";

function Hero() {
  return (
    <div className="container  " style={{ margin: "auto" }}>
      <div className="row p-5 " style={{ marginTop: "7rem" }}>
        <h1 className=" text-center fs-2 " style={{ color: "#424242" }}>
          We pioneered the discount broking model in India.
          <br /> Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row border-top mt-5 "
        style={{ lineHeight: "1.5", color: "#424242" }}
      >
        <div className="col-1"></div>
        <div className="col-5 mt-5 p-3 aboutHeroPara fs-6">
          <p>
            We kick-started operations on the 15th of August, 2010
            <br /> with the goal of breaking all barriers that traders and
            <br />
            investors face in India in terms of cost, support, and <br />
            technology. We named the company Zerodha, a<br /> combination of
            Zero and "Rodha", the Sanskrit word for
            <br />
            barrier
            <br />
          </p>
          <p>
            Today, our disruptive pricing models and in-house <br /> technology
            have made us the biggest stock broker in <br /> India.
          </p>
          <br />
          <p>
            Over 1+ Crore clients place millions of orders every day <br />{" "}
            through our powerful ecosystem of investment <br /> platforms,
            contributing over 15% of all Indian retail <br /> trading volumes.
          </p>
        </div>
        <div className="col-6 mt-5 p-3 aboutHero fs-6">
          <p>
            In addition, we run a number of popular open online <br />{" "}
            educational and community initiatives to empower retail <br />{" "}
            traders and investors.
          </p>
          <p>
            <a href="/"> Rainmatter </a>, our fintech fund and incubator, has
            invested <br /> in several fintech startups with the goal of growing
            the <br /> Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our <a href="/">
              {" "}
              blog{" "}
            </a>{" "}
            or see what <br /> the media is <a href="/"> Saying about us. </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
