import './ShoppingCartButton.scss';
import shoppingCartImage from '../../Assets/Icons/shoppingCart.png';

const ShoppingCartButton = () => (
  <button className="shopping-cart__button">
    <img
      src={shoppingCartImage}
      alt="Shopping cart icon"
      className="shopping-cart__icon"
    />
    <span className="shopping-cart__text">
      2 Items - $10.49
    </span>
  </button>
);

export default ShoppingCartButton;
