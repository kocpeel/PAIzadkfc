import "./BasketItem.scss";

const BasketItem = (props) => {
  const { orderCount, orderedProduct, onProductRemove } = props;
  const { name, price } = orderedProduct;
  const handleButtonClick = () => {
    onProductRemove(orderedProduct);
  };

  return (
    <li className="basketItem">
      <div className="info">
        <span>{orderCount}x</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handleButtonClick}>
          Remóve
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
