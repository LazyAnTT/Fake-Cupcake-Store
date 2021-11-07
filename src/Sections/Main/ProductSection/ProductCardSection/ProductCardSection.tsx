import './ProductCardSection.scss';
import { FC } from 'react';
import ProductCard from '../../../../Components/ProductCards/ProductCard';
import { ShopItems } from '../../../../Data/ProductList';

type ProductCardSectionProps = {
  products: ShopItems[]
}

const ProductCardSection:FC<ProductCardSectionProps> = ({ products }) => (
  <div className="product-section-wrapper">
    {products.map(({
      title, price, src, id,
    }) => <ProductCard key={id} productName={title} price={price} src={src} />)}
  </div>
);

export default ProductCardSection;
