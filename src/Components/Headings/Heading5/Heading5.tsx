import './Heading5.scss';
import { FC } from 'react';

type Heading5Props = {
    title: string | number;
}

const Heading5:FC<Heading5Props> = ({ title }) => (
  <h5 className="heading5">
    {title}
  </h5>
);

export default Heading5;
