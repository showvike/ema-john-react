import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((prev, current) => prev + current.price, 0);
  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <div>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: $</p>
        <p>Tax: $</p>
      </div>
      <h6>Grand Total: $</h6>
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
