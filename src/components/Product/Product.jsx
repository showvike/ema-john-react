import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="product-info">
        <div>
          <p className="product-name">{name}</p>
          <p className="product-price">Price: ${price}</p>
        </div>
        <div>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} stars</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleAddToCart(props.product)}
          className="btn-cart"
        >
          Add to Cart
          <FontAwesomeIcon className="fa-cart-plus" icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Product;
