import React from "react";

import Dashboard from "./Dashboard.js";
import TopBar from "./TopBar.js";

// import FlashMessageDisplay from "./FlashMessageDisplay";


const Home = () => {
  return (
    <>
     
      <TopBar />
      {/* <FlashMessageDisplay/> */}
      <Dashboard />
     
    </>
  );
};

export default Home;