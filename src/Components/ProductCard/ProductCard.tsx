import './ProductCard.scss';
import { FC } from 'react';
import { ProductItems } from '../../Data/ProductList';
import Heading5 from '../Headings/Heading5/Heading5';
import Button from '../Buttons/Button/Button';
import { CartContent } from '../../Data/CartContent';

type ProductCardProps = {
    productName: ProductItems['title'];
    src: ProductItems['src'];
    price: ProductItems['price'];
    cart: CartContent;
    setCart: (value: CartContent) => void;
}

const ProductCard:FC<ProductCardProps> = ({
  productName,
  src,
  price,
  cart,
  setCart,
}) => {
  const addToCart = () => {
    setCart({ itemCount: cart.itemCount + 1, total: cart.total + price });
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={src} alt={productName} className="product-card__image" />

      </div>
      <div className="product-card__info">
        <Button title="ADD" className="button--add-to-cart" clickHandler={addToCart} />
        <Heading5 title={productName} />
        <Heading5 title={`$ ${price}`} />
      </div>
    </div>
  );
};

export default ProductCard;
