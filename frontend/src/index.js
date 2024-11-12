import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import 'react-toastify/ReactToastify.css'

// import Dashboard from "../../dashboard/src/index"
import Homepage from './landing_page/home/Homepage';
import {  Signup } from "./landing_page";


import Aboutpage from  './landing_page/About/Aboutpage';
import Productpage from  './landing_page/product/Productpage';
import Pricingpage from  './landing_page/pricing/Pricingpage';
import Supportpage from  './landing_page/support/Supportpage';
 import Navbar from'./landing_page/Navbar';
 import Footer from'./landing_page/Footer';
import Notfound from './landing_page/not found';





 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <Navbar/>
  <Routes>
     <Route path="/" element={<Homepage/>}/>
     
    
    <Route path="/about" element={<Aboutpage/>}/>
    <Route path="/product" element={<Productpage/>}/>
   <Route path="/pricing" element={<Pricingpage/>}/>
    <Route path="/support" element={<Supportpage/>}/>
    <Route path="*" element={<Notfound/>}/>
    
    
        
      
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
  
  <Footer/>
  </BrowserRouter>
 );

