import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

const Cart = ({ cart, handleClearCart }) => {
  const orderSummary = cart.reduce(
    (prev, next) => ({
      totalPrice: prev.totalPrice + next.price * next.quantity,
      totalShippingCharge:
        prev.totalShippingCharge + next.shipping * next.quantity,
      tax: prev.tax + ((next.price * 7) / 100) * next.quantity,
      grandTotal:
        prev.grandTotal +
        next.price * next.quantity +
        next.shipping * next.quantity +
        ((next.price * 7) / 100) * next.quantity,
      quantity: prev.quantity + next.quantity,
    }),
    {
      totalPrice: 0,
      totalShippingCharge: 0,
      tax: 0,
      grandTotal: 0,
      quantity: 0,
    }
  );
  const { totalPrice, totalShippingCharge, tax, grandTotal, quantity } =
    orderSummary;
  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <div>
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShippingCharge}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
      </div>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
      <div className="buttons">
        <button onClick={handleClearCart}>
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
