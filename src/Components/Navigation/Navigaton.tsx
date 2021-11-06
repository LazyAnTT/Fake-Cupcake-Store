import Anchor from '../Anchors/Anchor';
import NavigationItemList from '../../Data/NavigationItemList';
import './Navigation.scss';

const Navigation = () => (
  <div>
    <ul className="navigation__list">
      {NavigationItemList.map(({ name, href }) => (
        <li className="navigation__list">
          <Anchor href={href}>{name}</Anchor>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
