import { FormEvent, useRef, useState } from "react";
import { GrValidate } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
import Header from "../../components/header";
import CartItems from "../../components/users/CartItems";
import { Link } from "react-router-dom";
import { TbShoppingCartSearch } from "react-icons/tb";

const Cart = () => {
  const subtotal = 54000;
  const shippingCharges = 200;
  const tax = Math.round(subtotal * 0.18);
  const discount = 1000;
  let total = subtotal + shippingCharges + tax - discount;

  const [coupon, setCoupon] = useState<string>();
  const [isValideCode, setIsValideCode] = useState<boolean>(false);
  const [couponValue, setCouponValue] = useState<number>(0);
  const [isdisplayed, setisdisplayed] = useState<boolean>(false);
  const cartItems = [
    {
      productId: "assssdaa",
      photo:
        "https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UF1000,1000_QL80_.jpg",
      name: "iPhone",
      price: 48000,
      quantity: 115,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
    {
      productId: "assssdayi",
      photo:
        "https://m.media-amazon.com/images/I/41po0Y8FRnL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Cannon 560",
      price: 79562,
      quantity: 1,
      stock: 10,
    },
  ];

  const couponHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisdisplayed(true);
    // API call
    const ranNumber = 60;
    if (ranNumber > 90) {
      console.log(ranNumber);
      console.log(coupon);
      setIsValideCode(true);
    } else {
      console.log(ranNumber);
      console.log(coupon);
      setIsValideCode(false);
      setTimeout(() => {
        setisdisplayed(false);
      }, 5000);
    }
    if (coupon && isValideCode && isdisplayed) {
      total = total - couponValue;
    }
  };

  return (
    <div className="main-container">
      <Header />
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <main className="cart">
            {cartItems.map((item, idx) => (
              <CartItems key={idx} cartItem={item} />
            ))}
          </main>
          <aside>
            <p>Subtotal : ₹{subtotal}</p>
            <p>Shipping Charges : ₹{shippingCharges}</p>
            <p>Tax : ₹{tax}</p>
            <p>
              Discount : <b>₹{discount}</b>
            </p>
            <form onSubmit={couponHandler}>
              <input
              required={true}
                type="text"
                placeholder="Enter Your Coupon"
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button type="submit">Apply</button>
            </form>
            {isdisplayed &&
              (isValideCode ? (
                <span className="isValideCode green">
                  Applied <GrValidate />
                </span>
              ) : (
                <span className="isValideCode red">
                  Invalid Or Expired <RxCrossCircled />
                </span>
              ))}
            {isdisplayed && isValideCode && (
              <p className="isValideCode green">
                Coupon Discount : <b>₹{couponValue} off</b>
              </p>
            )}
            <p className="total">
              Total :<i> ₹{total}</i>
            </p>
            <Link to={"/shipping"}>CheckOut</Link>
          </aside>
        </div>
      ) : (
        <div className="empty-cart">
          <TbShoppingCartSearch />
          <p>Your Cart is empty</p>
          <Link to={"/"}>Shop Now</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
