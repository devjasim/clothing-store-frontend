import Link from "next/link";
import { BiTrashAlt } from "react-icons/bi";

const CartItem = ({ item, qtyChangeHandler, removeHandler }: any) => {
  return (
    <div className="bg-gray-200 border-t-2 shadow-md cartitem border-t-gray-100">
      <div className="cartitem__image">
        <img src={item.images[0]} alt={item.productName} />
      </div>
        <p className="text-xl font-medium">{item.productName}</p>
      <p className="cartitem__price">৳ {item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item._id, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(5).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item._id)}
      >
        <BiTrashAlt />
      </button>
    </div>
  );
};

export default CartItem;
