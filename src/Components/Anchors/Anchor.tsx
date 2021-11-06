import { FC } from 'react';
import './Anchor.scss';

type AnchorProps = {
    href: string | '#'
    className?: string
}

const Anchor:FC<AnchorProps> = ({ href, children, className }) => (
  <a
    href={href}
    className="anchor"
  >
    {children}
  </a>
);

export default Anchor;
