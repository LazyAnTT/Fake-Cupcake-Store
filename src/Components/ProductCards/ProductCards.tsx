import './ProductCards.scss';
import { FC } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ShopItems } from '../../Data/ProductList';

type ProductCardSectionProps = {
  products: ShopItems[]
}

const ProductCards:FC<ProductCardSectionProps> = ({ products }) => (
  <div className="product-section-wrapper">
    {products.map(({
      title, price, src, id,
    }) => <ProductCard key={id} productName={title} price={price} src={src} />)}
  </div>
);

export default ProductCards;