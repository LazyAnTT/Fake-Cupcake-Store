import { useState } from 'react';
import { cartContent } from '../Data/CartContent';
import Header from '../Sections/Header/Header';
import ProductSection from '../Sections/Main/ProductSection/ProductSection';
import HeadingXmas from '../Components/Headings/HeadingXmas/HeadingXmas';

const Home = () => {
  const [cart, setCart] = useState(cartContent);
  const xmasTitlesColorList = ['green', 'blue', 'yellow', 'red'];
  const [color, setXmasTitlesColor] = useState('green');
  return (
    <>
      <Header cart={cart} />
      <HeadingXmas color={color} setXmasTitlesColor={setXmasTitlesColor} xmasTitlesColorList={xmasTitlesColorList} />
      <ProductSection cart={cart} setCart={setCart} />

    </>
  );
};

export default Home;
