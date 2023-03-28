import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "./cartSlice";

const CartFood = ({ name, price, index }) => {
  const [num, setNum] = useState(price);

  const changeprice = () => {
    setNum(num + price);
  };
  const dispatch = useDispatch();

  const decrementprice = () => {
    if (num > price) {
      setNum(num - price);
    } else {
      dispatch(removeItems(index));
    }
  };
  return (
    <div className=" ml-56 mr-56 ">
      <div className="flex  mt-3 h-20 w-auto border-b-4 justify-between">
        <h1 className="font-semibold ">{name}</h1>
        <div className="flex justify-between h-10 w-28 mt-6 border-2 border-green-800">
          <button
            onClick={() => changeprice()}
            className="rounded-full h-auto w-5  mt-2 "
          >
            +
          </button>

          <h1 className="mt-2">{num / 100}</h1>
          <button
            onClick={() => decrementprice()}
            className="rounded-full h-auto w-5  mt-2 "
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFood;
