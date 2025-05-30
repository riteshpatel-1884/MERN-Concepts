import { useSelector } from "react-redux";
//This hook is used to access data (state) from your Redux store in a React component.

function Navabar() {
  const k = useSelector((store) => store.cart.k);
  //cart is a slice name and cart ke andar k hai so k ki value access ho gyi aise.
  console.log(k);
  return (
    <div>
      Cart <span>{k}</span>
    </div>
  );
}

export default Navabar;

//Explanation:

// useSelector takes a function.
// That function receives the entire Redux store state.
// You're accessing the cart slice: store.cart
// Inside that slice, you're reading the value of k (your cart item count).
// So, k now holds the current cart count.

