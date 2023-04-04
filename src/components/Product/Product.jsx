import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
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
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
