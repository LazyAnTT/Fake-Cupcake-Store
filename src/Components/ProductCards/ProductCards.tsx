import './ProductCards.scss';
import { FC } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductItems } from '../../Data/ProductList';
import { CartContent } from '../../Data/CartContent';

type ProductCardsProps = {
  products: ProductItems[]
  cart: CartContent;
  setCart:(value:CartContent)=> void;
}

const ProductCards:FC<ProductCardsProps> = ({ products, cart, setCart }) => (
  <div className="product-section-wrapper">
    {products.map(({
      title, price, src, id,
    }) => <ProductCard key={id} productName={title} price={price} src={src} cart={cart} setCart={setCart} />)}
  </div>
);

export default ProductCards;
