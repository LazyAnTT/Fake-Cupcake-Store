import './ProductCards.scss';
import { FC } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductItems } from '../../Data/ProductList';

type ProductCardsProps = {
  products: ProductItems[]
}

const ProductCards:FC<ProductCardsProps> = ({ products }) => (
  <div className="product-section-wrapper">
    {products.map(({
      title, price, src, id,
    }) => <ProductCard key={id} productName={title} price={price} src={src} />)}
  </div>
);

export default ProductCards;
