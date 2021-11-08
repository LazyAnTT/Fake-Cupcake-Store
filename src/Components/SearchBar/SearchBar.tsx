import './SearchBar.scss';
import { ChangeEvent, FC } from 'react';

type SearchBarProps = {
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar:FC<SearchBarProps> = ({ inputHandler }) => (
  <input type="text" placeholder="SNACKS" onChange={(event) => inputHandler(event)} className="products__search-bar" />
);

export default SearchBar;
