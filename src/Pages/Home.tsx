import { useState } from 'react';
import { cartContent } from '../Data/CartContent';
import Header from '../Sections/Header/Header';
import ProductSection from '../Sections/Main/ProductSection/ProductSection';

const Home = () => {
  const [cart, setCart] = useState(cartContent);
  return (
    <>
      <Header cart={cart} />
      <ProductSection cart={cart} setCart={setCart} />

    </>
  );
};

export default Home;
