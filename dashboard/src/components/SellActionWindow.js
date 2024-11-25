import React, { useState ,useContext}  from "react";
import { Link } from "react-router-dom";

import axios from "axios"

import GeneralContext from "./GeneralContext";
import  FlashMessageContext  from "./FlashMeassegeContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
 
  const [stockQuantity,setStockQuantity] = useState(0);
  const [stockPrice,setStockPrice] = useState(0.0);
  const { setFlashMessage } = useContext(FlashMessageContext);
 
  const generalContext= useContext(GeneralContext);
  const handleSellClick = async()=>{
    try {
     const response=await axios.post("https://zerodha-backend-wn62.onrender.com/newOrder",{
        name: uid,
    qty:stockQuantity,
    price: stockPrice,
    mode: "SELL",
      },
      { withCredentials: true }
    );
    setFlashMessage({
        success: response.data.success || '',
        error: response.data.error || '',
      });
  
      console.log('Order sell successfully:', response.data);
    } catch (error) {
      console.error('Error placing order:', error.response?.data || error.message);
      setFlashMessage({
        success: '',
        error: error.response?.data?.error || 'Failed to place order. Please try again.',
      });
    }
  
     generalContext.closeSellWindow();
  };
  const handleCancelClick = ()=>{
    generalContext.closeSellWindow();
  };

  

 

  return (
    
    <div className="container" id="buy-window" draggable="true">
     
      <div className="regular-order">
        <div className="inputs">
          <h1>{uid}</h1>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e)=>setStockQuantity(e.target.value)}
              value={stockQuantity}
              
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e)=>setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue sellAction" onClick={handleSellClick} >
          Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;