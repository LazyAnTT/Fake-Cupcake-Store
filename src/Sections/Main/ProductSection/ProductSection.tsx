import { FC, useState } from 'react';
import './ProductSection.scss';
import { shopItems } from '../../../Data/ProductList';
import Heading1 from '../../../Components/Headings/Heading1/Heading1';
import ProductFilterSection from './ProductFilterSection/ProductFilterSection';
import ProductCardSection from './ProductCardSection/ProductCardSection';

const ProductSection:FC = () => {
  const [products, setProducts] = useState(shopItems);

  return (
    <section className="products">
      <div className="products__wrapper">
        <Heading1 normalPart="our" strongPart="store" />
        <ProductFilterSection setProducts={setProducts} allProducts={shopItems} />
        <ProductCardSection products={products} />
      </div>
    </section>
  );
};

export default ProductSection;
