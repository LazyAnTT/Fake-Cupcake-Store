import Logo from '../../Components/Logos/Logo';
import Navigation from '../../Components/Navigation/Navigaton';
import PhoneNumber from '../../Components/PhoneNumber/PhoneNumber';
import ShoppingCartButton from '../../Components/Buttons/ShoppingCartButton/ShoppingCartButton';
import './Header.scss';
import '../../Helpers/Helper.scss';

const Header = () => (
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
        <ShoppingCartButton />
      </div>
    </div>

  </header>
);

export default Header;
