import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";
import axios from "axios";
import {   toast, ToastContainer } from "react-toastify";
// import  FlashMessageContext  from "./FlashMeassegeContext";
const Summary = () => {

  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  // const { setFlashMessage } = useContext(FlashMessageContext);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
       console.log("token is undefined");
       window.location.href="http://localhost:3000/login";
      }
      
      const { data } = await axios.post(
        "https://zerodha-backend-wn62.onrender.com",
        {},
        { withCredentials: true }
      );
     
      const { status, user } = data;
    
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), window.location.href="http://localhost:3000/login");
    };
    verifyCookie();
  }, ); 
  // console.log("cookies",cookies);
  if (cookies.token=="undefined") {
  
    window.location.href="http://localhost:3000/login";
   }
  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
      <ToastContainer/>
    </>
  );
};

export default Summary;