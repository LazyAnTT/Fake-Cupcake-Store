import { FC, useState, useEffect } from 'react';
import './ProductSection.scss';
import { productItems } from '../../../Data/ProductList';
import { CartContent } from '../../../Data/CartContent';
import Heading1 from '../../../Components/Headings/Heading1/Heading1';
import ProductFilterCards from './ProductFilterCards/ProductFilterCards';
import ProductCards from '../../../Components/ProductCards/ProductCards';

type ProductSectionProps = {
  cart: CartContent;
  setCart: (value: CartContent) => void;
  color:string;
  xmasTitlesColorList: string[];
  setXmasTitlesColor: (value:string) => void;
}

const ProductSection:FC<ProductSectionProps> = ({
  cart, setCart, color, xmasTitlesColorList, setXmasTitlesColor,
}) => {
  const [products, setProducts] = useState(productItems);
  useEffect(() => {
    setXmasTitlesColor(xmasTitlesColorList.filter((item) => item !== color)[Math.floor(Math.random() * 3)]);
  }, [products]);

  return (
    <section className="products">
      <Heading1 normalPart="our" strongPart="store" />
      <ProductFilterCards
        setProducts={setProducts}
        allProducts={productItems}
        color={color}
        xmasTitlesColorList={xmasTitlesColorList}
        setXmasTitlesColor={setXmasTitlesColor}
      />
      <ProductCards products={products} cart={cart} setCart={setCart} />
    </section>
  );
};

export default ProductSection;
