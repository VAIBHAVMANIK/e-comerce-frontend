import { TbTrashFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

type CartItemsProps = {
  cartItem: any;
};
const CartItems = ({ cartItem }: CartItemsProps) => {
  const { productId, photo, name, price, quantity } = cartItem;
  return (
    <div className="cart-item">
      <article className="cart-item-info">
        <img src={photo} alt={name} />
        <div>
          <Link to={`/product/${productId}`}>
            <p>{name}</p>
          </Link>
          <p className="cart-item-price">₹{price}</p>
        </div>
      </article>
      <div>
        <button className="cart-item-btn">-</button>
        <span>{quantity}</span>
        <button className="cart-item-btn">+</button>
        <button className="cart-item-btn cart-item-remove-btn">
          <TbTrashFilled />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
