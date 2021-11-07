import './ProductFilterCards.scss';
import { FC } from 'react';
import ProductFilterByType from '../../../../Data/ProductFilterByType';
import { ProductItems } from '../../../../Data/ProductList';
import Button from '../../../../Components/Buttons/Button/Button';

type ProductFilterCardsProps = {
  setProducts: (value: ProductItems[]) => void;
  allProducts: ProductItems[];
}

const ProductFilterCards:FC<ProductFilterCardsProps> = ({ setProducts, allProducts }) => {
  const clickHandler = (value: string) => {
    setProducts(allProducts.filter((product) => {
      if (value === 'all') {
        return product;
      }
      return product.type === value;
    }));
  };

  return (
    <div className="products__filter-button-wrapper">
      {
          ProductFilterByType.map((name) => (
            <Button key={name} title={name} onClick={() => { clickHandler(name); }} />
          ))
        }
    </div>
  );
};

export default ProductFilterCards;
