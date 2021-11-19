import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const date = new Date().toLocaleDateString();

  useEffect(() => {
    fetch(
      `https://tranquil-ocean-72322.herokuapp.com/myOrders/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [user?.email]);

  // ORDERED PRODUCT DELETE METHOD
  const handleDelete = (id) => {
    fetch(`https://tranquil-ocean-72322.herokuapp.com/deleteProduct/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const proceed = window.confirm(
          "Stop! are you sure you want to delete?"
        );
        if (proceed) {
          if (data.deletedCount === 1) {
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        }
      });
  };

  return (
    <div className="container">
      <h2 className="text-info fw-bold" >My Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="text-info " scope="col">User Address</th>
            <th className="text-info " scope="col">Email</th>
            <th  className="text-info " scope="col">Item Name</th>
            <th  className="text-info " scope="col">Item Name</th>
            <th    className="text-info " scope="col">Price</th>
            <th  className="text-info " scope="col">Date</th>
            <th   className="text-info "  scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order) => (
            <tr >
              <td className="text-danger " >{order?.address}</td>
              <td  className="text-danger" >{order?.email}</td>
              <td  className="text-danger" >{order?.productName}</td>
              <td  className="text-danger" >${order.price}</td>
              <td  className="text-danger" >${order.price}</td>
              <td   className="text-danger" >{date}</td>
              <td>
                <button  className="btn btn-warning m-2" onClick={() => handleDelete(order._id)}>Delete</button>
                <button className="btn btn-primary m-2" >Approve</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
