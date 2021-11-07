import './ProductCard.scss';
import { FC } from 'react';
import { ProductItems } from '../../Data/ProductList';
import Heading5 from '../Headings/Heading5/Heading5';

type ProductCardProps = {
    productName: ProductItems['title'];
    src: ProductItems['src'];
    price: ProductItems['price'];
}

const ProductCard:FC<ProductCardProps> = ({ productName, src, price }) => (
  <div className="product-card">
    <div className="product-card__image-wrapper">
      <img src={src} alt={productName} className="product-card__image" />
    </div>
    <div className="product-card__info">
      <Heading5 title={productName} />
      <Heading5 title={`$ ${price}`} />
    </div>
  </div>
);

export default ProductCard;
