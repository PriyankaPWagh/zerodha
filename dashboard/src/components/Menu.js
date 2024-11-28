import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, } from "react-toastify";



const Menu = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  

 
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        console.log("cookies.token",cookies.token)
        window.location.href="http://localhost:3000/login";
      }
      const { data } = await axios.post(
        "https://zerodha-backend-wn62.onrender.com",
        {},
        { withCredentials: true }
      );
      console.log("Response from server:", data);
      const {  user } = data;
      setUsername(user);
     
      
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    window.location.href="https://zerodha-di09.onrender.com/";
  };
  const [selectMenu,setSelectMenu] = useState(0);
 

  const handleMenuClick= (index)=>{
    setSelectMenu(index);
  }

  
  const menuClass="menu";
  const activeMenueClass = "menu Selected";
  return (
    
    <div className="menu-container">
       
      <img src="logo.png" style={{ width: "30px" }} alt="imglogo" /> 
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}>
            <p className={selectMenu === 0 ? activeMenueClass: menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}>
            <p className={selectMenu === 0 ? activeMenueClass: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}>
            <p className={selectMenu === 0 ? activeMenueClass: menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
          
          <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}>
            <p className={selectMenu === 0 ? activeMenueClass: menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}>
            <p className={selectMenu === 0 ? activeMenueClass: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}>
            <p className={selectMenu === 0 ? activeMenueClass: menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
       
        <hr />
        &nbsp;  &nbsp; &nbsp;
        <div className="welcomeUser"><h5>
          {/* {" "} */}
          {username[0]}
        </h5></div> &nbsp;  &nbsp; &nbsp;
        <div><button onClick={Logout}>Logout</button></div>
        
      
        <ToastContainer />
      </div>
    </div>
  );
};



export default Menu;