import { FC, useState } from 'react';
import './ProductSection.scss';
import { productItems } from '../../../Data/ProductList';
import Heading1 from '../../../Components/Headings/Heading1/Heading1';
import ProductFilterCards from './ProductFilterCards/ProductFilterCards';
import ProductCards from '../../../Components/ProductCards/ProductCards';

const ProductSection:FC = () => {
  const [products, setProducts] = useState(productItems);

  return (
    <section className="products">
      <div className="products__wrapper">
        <Heading1 normalPart="our" strongPart="store" />
        <ProductFilterCards setProducts={setProducts} allProducts={productItems} />
        <ProductCards products={products} />
      </div>
    </section>
  );
};

export default ProductSection;
