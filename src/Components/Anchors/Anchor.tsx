import { FC } from 'react';
import './Anchor.css';

type AnchorProps = {
    href: string | '#'
}

const Anchor:FC<AnchorProps> = ({ href, children }) => (
  <a href={href}>{children}</a>
);

export default Anchor;
