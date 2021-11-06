import './ShoppingCartButton.scss';
import shoppingCartImage from '../../../Assets/Icons/shoppingCart.png';

const ShoppingCartButton = () => (
  <button
    className="shopping-cart"
  >
    <img
      src={shoppingCartImage}
      alt="Shopping cart icon"
      className="shopping-cart__icon"
    />
    <p
      className="shopping-cart__text"
    >
      2 Items - $10.49
    </p>

  </button>
);

export default ShoppingCartButton;
