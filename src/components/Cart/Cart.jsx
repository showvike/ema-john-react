import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  const orderSummary = cart.reduce(
    (prev, next) => ({
      totalPrice: prev.totalPrice + next.price,
      totalShippingCharge: prev.totalShippingCharge + next.shipping,
      tax: prev.tax + (next.price * 7) / 100,
    }),
    {
      totalPrice: 0,
      totalShippingCharge: 0,
      tax: 0,
    }
  );
  const { totalPrice, totalShippingCharge, tax } = orderSummary;
  const grandTotal = totalPrice + totalShippingCharge + tax;
  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <div>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShippingCharge}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
      </div>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <div className="buttons">
        <button>
          Clear Cart
          <FontAwesomeIcon className="fa-trash-can" icon={faTrashCan} />
        </button>
        <button>
          Review Order
          <FontAwesomeIcon className="fa-arrow-right" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
