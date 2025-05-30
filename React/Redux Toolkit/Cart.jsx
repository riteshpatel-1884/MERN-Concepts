import React from "react";
import { addToCart } from "./utils/CartSlice";  // Importing the addToCart action from your Redux slice (CartSlice.js).
import { useDispatch } from "react-redux"; // Importing the useDispatch hook from react-redux. This hook is used to send actions (like addToCart) to the Redux store.

function Cart() {
  const dispatch = useDispatch(); //We can use dispatch() to send any Redux action to update the state.

  //When the button is clicked, it dispatches the addToCart() action to Redux, which increases the cart count (k in your state).
  const handleAdd = () => {
    dispatch(addToCart());
  };

  return (
    <>
      <div>
        <button onClick={handleAdd}>Add to Cart</button>
      </div>
    </>
  );
}

export default Cart;
