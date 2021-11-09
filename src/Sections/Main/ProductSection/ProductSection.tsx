import { FC, useState } from 'react';
import './ProductSection.scss';
import { productItems } from '../../../Data/ProductList';
import { CartContent } from '../../../Data/CartContent';
import Heading1 from '../../../Components/Headings/Heading1/Heading1';
import ProductFilterCards from './ProductFilterCards/ProductFilterCards';
import ProductCards from '../../../Components/ProductCards/ProductCards';

type ProductSectionProps = {
  cart: CartContent;
  setCart: (value: CartContent) => void;
}

const ProductSection:FC<ProductSectionProps> = ({ cart, setCart }) => {
  const [products, setProducts] = useState(productItems);

  return (
    <section className="products">
      <Heading1 normalPart="our" strongPart="store" />
      <ProductFilterCards setProducts={setProducts} allProducts={productItems} />
      <ProductCards products={products} cart={cart} setCart={setCart} />
    </section>
  );
};

export default ProductSection;
