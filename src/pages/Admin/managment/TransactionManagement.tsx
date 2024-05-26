import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { Link } from "react-router-dom";

interface OrderItemType {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
}

interface OrderType {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pincode: number;
  quantity: number;
  status: "Processing" | "Delivered" | "Shipped";
  subtotal: number;
  discount: number;
  shippingCharge: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
  _id: string;
}

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const OrderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "ascd aclaknlaks",
  },
  {
    name: "Puma Shoes",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "ascd aclaknlaks",
  },
  {
    name: "Puma Shoes",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "ascd aclaknlaks",
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Raju",
    address: "Gurgaon",
    city: "Gurgon",
    country: "India",
    state: "New Delhi",
    pincode: 490065,
    quantity: 4,
    status: "Processing",
    subtotal: 8000,
    discount: 1000,
    shippingCharge: 200,
    tax: 1800,
    total: 8000 - 1000 + 200 + 1800,
    orderItems: OrderItems,
    _id: "askjnnaskddj",
  });

  const {
    name,
    _id,
    address,
    city,
    country,
    discount,
    orderItems,
    pincode,
    quantity,
    shippingCharge,
    state,
    status,
    subtotal,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  const OrderCard = ({ _id, name, photo, price, quantity }: OrderItemType) => {
    return (
      <div>
        <img src={photo} alt={name} />
        <Link to={`product/${_id}`}>{name}</Link>
        <span>
          ${price} X {quantity} = ${price * quantity}
        </span>
      </div>
    );
  };

  return (
    <div className="AdminContainer">
      <AdminSidebar />
      <main className="Transaction-manage">
        <section className="Order-Card">
          <h2>Order Items</h2>
          {order.orderItems.map((item, idx) => (
            <OrderCard
              name={item.name}
              photo={item.photo}
              price={item.price}
              quantity={item.quantity}
              _id={item._id}
              key={idx}
            />
          ))}
        </section>
        <section className="Order-Info">
          <h2>Order Info</h2>
          <h3>User Info</h3>
          <p>Name : {name}</p>
          <p>Address :{`${address},${city},${state},${country},${pincode}`}</p>
          <h3>Amount Info</h3>
          <p>Subtotal : {subtotal}</p>
          <p>Shipping Charges : {shippingCharge}</p>
          <p>Tax : {tax}</p>
          <p>Discount : {discount}</p>
          <p>Total : {total}</p>
          <h3>Status Info</h3>
          <p>
            Status :
            <span
              className={
                status === "Delivered"
                  ? "green"
                  : status === "Shipped"
                  ? "violet"
                  : "blue"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </section>
      </main>
    </div>
  );
};

export default TransactionManagement;
