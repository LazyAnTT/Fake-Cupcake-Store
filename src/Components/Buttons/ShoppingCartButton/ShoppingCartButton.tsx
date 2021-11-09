import './ShoppingCartButton.scss';
import { FC } from 'react';
import shoppingCartImage from '../../Assets/Icons/shoppingCart.png';

type ShoppingCartButtonProps = {
  title?: string;
  className?: string;
  clickHandler?: () => void;
}

const ShoppingCartButton:FC<ShoppingCartButtonProps> = ({
  title,
  className,
  clickHandler,
}) => (
  <button className={className} onClick={clickHandler}>
    <img
      src={shoppingCartImage}
      alt="Shopping cart icon"
      className="shopping-cart__icon"
    />
    {title}
  </button>
);

export default ShoppingCartButton;
