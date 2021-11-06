import './Heading1.scss';
import { FC } from 'react';

type Heading1Props = {
    normalPart: string;
    strongPart: string;
}

const Heading1:FC<Heading1Props> = ({ normalPart, strongPart }) => (
  <h1 className="heading1">
    {normalPart}
    <span className="heading1--strong">
      {` ${strongPart}`}
    </span>
  </h1>
);

export default Heading1;
