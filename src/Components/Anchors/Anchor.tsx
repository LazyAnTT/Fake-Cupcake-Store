import { FC } from 'react';
import './Anchor.css';

type AnchorProps = {
    type?: 'string'
    href: 'string' | '#'
}

const Anchor:FC<AnchorProps> = ({ type = 'string', href, children }) => (
  <a href={href}>{children}</a>
);

export default Anchor;
