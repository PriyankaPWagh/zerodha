import React,{useEffect,useState,useContext} from "react";


import { useCookies } from "react-cookie";
import axios from "axios";
import {   ToastContainer } from "react-toastify";
import  FlashMessageContext  from "./FlashMeassegeContext";
const Summary = () => {

  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const { setFlashMessage } = useContext(FlashMessageContext);
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
       window.location.href="https://zerodha-dashboard-12z0.onrender.com/login";
      }
      const { data } = await axios.post(
        "https://zerodha-backend-wn62.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? setFlashMessage ({
          success: ` Welcome  ${user} to the Zerodha Dashboard`,
          error:  '',
        })
        : (removeCookie("token"), window.location.href="https://zerodha-dashboard-12z0.onrender.com/login");
    };
    verifyCookie();
  });
  
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