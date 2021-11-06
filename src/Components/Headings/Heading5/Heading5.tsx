import './Heading5.scss';
import { FC } from 'react';

type Heading5Props = {
    title: string | number;
}

const Heading5:FC<Heading5Props> = ({ title }) => (
  <h1 className="heading5">
    {title}
  </h1>
);

export default Heading5;
