import React from "react";
import LeftSection from "./Leftsection";
import RightSection from "./Rightsection";
import Universe from "./Universe";
import Hero from "./Hero";

function Productpage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media\assets\kite.png"
        productName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn More"
        googlepPlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media\assets\console.png"
        productName="Console"
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn More"
      />
      <LeftSection
        imageUrl="media\assets\coin.png"
        productName="Coine"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="coin"
        learnMore=""
        googlepPlay=""
        appStore=""
      />
      <RightSection
        imageUrl="media\assets\kiteconnect.png"
        productName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite connect"
      />
      <LeftSection
        imageUrl="media\assets\varsity.png"
        productName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlepPlay=""
        appStore=""
      />
      <h5 className="text-center mt-5" style={{ color: "#424242" }}>
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>
      <Universe />
    </>
  );
}

export default Productpage;
