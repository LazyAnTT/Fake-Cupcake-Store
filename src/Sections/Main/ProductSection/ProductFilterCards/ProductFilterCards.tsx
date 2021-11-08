import './ProductFilterCards.scss';
import { ChangeEvent, FC } from 'react';
import ProductFilterByType from '../../../../Data/ProductFilterByType';
import { ProductItems } from '../../../../Data/ProductList';
import Button from '../../../../Components/Buttons/Button/Button';
import SearchBar from '../../../../Components/SearchBar/SearchBar';

type ProductFilterCardsProps = {
  setProducts: (value: ProductItems[]) => void;
  allProducts: ProductItems[];
}

const ProductFilterCards:FC<ProductFilterCardsProps> = ({ setProducts, allProducts }) => {
  const clickHandler = (value: string) => {
    if (value === 'all') {
      return setProducts(allProducts);
    }
    return setProducts(allProducts.filter((product) => product.type === value));
  };

  const inputFilter = (value: string) => setProducts(allProducts.filter((product) => product.title.includes(value)));

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    inputFilter(inputValue);
  };

  return (
    <div className="products__filter-button-container">
      {
          ProductFilterByType.map((name) => (
            <Button key={name} title={name} onClick={() => { clickHandler(name); }} />
          ))
        }
      <SearchBar inputHandler={inputHandler} />
    </div>
  );
};

export default ProductFilterCards;
