import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  type?: 'submit' | 'button'
  clickHandler?: () => void
  title?: string
  className?: string
}

const Button:FC<ButtonProps> = ({
  type = 'button', clickHandler, title, className,
}) => (
  <button
    onClick={clickHandler}
    type={type}
    className="button"
  >
    {title}
  </button>
);

export default Button;
