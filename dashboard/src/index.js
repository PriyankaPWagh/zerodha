import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.js";
import Login from "./components/Login.jsx";

import 'react-toastify/ReactToastify.css' 



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <FlashMessageProvider>
    // <BrowserRouter>
    //   <Routes>
    //   <Route path="/login" element={<Login />} />
    //     <Route path="/*" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true, 
    }}
  >
    <Routes>
     
      {/* <Route index element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
    /* </FlashMessageProvider> */
);

