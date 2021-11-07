import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  type?: 'submit' | 'button'
  onClick?: () => void
  title?: string
}

const Button:FC<ButtonProps> = ({
  type = 'button', onClick, title,
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
