import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  type?: 'submit' | 'button'
  onClick?: () => void
}

const Button:FC<ButtonProps> = ({
  type = 'button', onClick, children,
}) => (
  <button onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
