import React from 'react';
import Logo from '../../Components/Logos/Logo';
import Navigation from '../../Components/Navigation/Navigaton';
import PhoneNumber from '../../Components/PhoneNumber/PhoneNumber';

const Header = () => (

  <header className="header">
    <Logo />
    <Navigation />
    <PhoneNumber />
  </header>

);

export default Header;
