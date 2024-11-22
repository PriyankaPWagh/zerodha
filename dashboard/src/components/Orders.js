
// export default Orders;
import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import  FlashMessageContext  from "./FlashMeassegeContext";
const Orders = () => {

  const [allOrders , setAllOrders] = useState([]);
  const { setFlashMessage } = useContext(FlashMessageContext);

  useEffect(() => {
    axios
      .get("http://localhost:4000/allOrders", { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          setAllOrders(res.data.allOrders); // Extract the `allOrders` array from the response
          console.log(res.data.allOrders)
        } else {
          setAllOrders([]); // Set an empty array if no orders are found
        }
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setAllOrders([]); // Handle errors gracefully by resetting the state
      });
  }, []

);

const deleteOrder = async (orderId) => {
  try {
    const response = await axios.delete(`http://localhost:4000/allOrders/${orderId}`);
    console.log(response.data.message); // Success message
    // Optionally refresh the orders list or update state
    setFlashMessage ({
      success: response.data.success || 'your order is delete',
      error: response.data.error || '',
    });
  } catch (error) {
    console.error('Error deleting the order:', error.response?.data?.message || error.message);
    setFlashMessage({
      success: '',
      error: error.response?.data?.error || 'no order delete',
    });
  }
};
// Delete order handler
const handleDelete = async (orderId) => {
  await deleteOrder(orderId);
  setAllOrders(allOrders.filter(allOrders => allOrders._id !== orderId)); // Update state to remove the deleted order
  console.log(orderId);
};
  return (
    <div>
     
    <div className="orders">
  {allOrders.length === 0 ? (
    <div className="no-orders">
      <p>You haven't placed any orders today</p>
      <Link to={"/"} className="btn">
        Get started
      </Link>
    </div>
  ) : (
    <>
     
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              {/* <th><input type="checkbox"></input></th> */}
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
              <th> delete order</th>
            </tr>
          </thead>
          <tbody>
            
            {allOrders.map((stock, index) => (
              <tr key={index}>
                
                {/* <td><input type="checkbox"></input></td> */}
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td><button className={stock.mode}>{stock.mode === "BUY" ? "Buy" : "Sell"}</button></td>
               <td> <button onClick={() => handleDelete(stock._id)} className="deletebtn">delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )}
</div>
</div>
  )};
export default Orders;