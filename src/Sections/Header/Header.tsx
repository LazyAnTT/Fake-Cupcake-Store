import { FC } from 'react';
import Logo from '../../Components/Logos/Logo';
import Navigation from '../../Components/Navigation/Navigaton';
import PhoneNumber from '../../Components/PhoneNumber/PhoneNumber';
import ShoppingCartButton from '../../Components/Buttons/ShoppingCartButton/ShoppingCartButton';
import { CartContent } from '../../Data/CartContent';
import './Header.scss';
import '../../Helpers/Helper.scss';

type HeaderProps = {
  cart: CartContent;
}

const Header:FC<HeaderProps> = ({ cart }) => {
  const cartButtonTitle = cart.itemCount === 1
    ? `${cart.itemCount} Item - $${cart.total}` : `${cart.itemCount} Items - $${cart.total}`;

  return (
    <header className="header">
      <div className="row middle-xs">
        <div className="col-xs-1">
          <Logo />
        </div>
        <div className="col-xs-offset-3 col-xs-4 ">
          <Navigation />
        </div>
        <div className="col-xs-2">
          <PhoneNumber />
        </div>
        <div className="col-xs-2 helper__flex-end">
          <ShoppingCartButton className="shopping-cart__button" title={cartButtonTitle} />
        </div>
      </div>

    </header>
  );
};

export default Header;
