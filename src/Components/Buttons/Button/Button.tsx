import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  type?: 'submit' | 'button'
  onClick?: () => void
  className?: string
  title?: string
}

const Button:FC<ButtonProps> = ({
  type = 'button', onClick, children, className, title,
}) => (
  <button
    onClick={onClick}
    type={type}
    className="button"
  >
    {title}
  </button>
);

export default Button;
