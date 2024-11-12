import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const Menu = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href="http://localhost:3001/login";
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      // return status
      //   ? toast(`Hello ${user}`, {
      //       position:"top-right",
      //     })
      //   : (removeCookie("token"), window.location.href="http://localhost:3001/login");
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    window.location.href="http://localhost:3000";
  };
  const [selectMenu,setSelectMenu] = useState(0);
  // const [isProfileDropdown,setIsProfileDropdown] = useState(false);

  const handleMenuClick= (index)=>{
    setSelectMenu(index);
  }

  // const handleProfikeClick= (index)=>{
  //   setIsProfileDropdown(!isProfileDropdown);
  // }
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
        <h4>
          {" "}
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>Logout</button>
      
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};



export default Menu;