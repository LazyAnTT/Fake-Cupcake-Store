import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  type?: 'submit' | 'button'
  onClick?: () => void
  className?: string
}

const Button:FC<ButtonProps> = ({
  type = 'button', onClick, children, className,
}) => (
  <button
    onClick={onClick}
    type={type}
    className="button"
  >
    {children}
  </button>
);

export default Button;
