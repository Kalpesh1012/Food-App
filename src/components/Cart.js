import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";

import CartFood from "./CartFood";

const Cart = () => {
  const dispatch = useDispatch();
  const clearnum = () => {
    dispatch(clearCart());
  };
  const showCart = useSelector((store) => store.cart.items);

  return (
    <div className="">
      <div className="flex justify-between">
        <h1>Cart {showCart.length}Items</h1>
        <button
          onClick={() => {
            clearnum();
          }}
          className="h-10 w-auto border-2 border-yellow-200 bg-orange-400"
        >
          Clear Cart
        </button>
      </div>
      {showCart.map((item, index) => {
        return <CartFood {...item} index={index} key={item.id} />;
      })}
    </div>
  );
};

export default Cart;
