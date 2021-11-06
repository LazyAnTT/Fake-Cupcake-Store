import './Navigation.scss';
import Anchor from '../Anchors/Anchor';
import NavigationItemList from '../../Data/NavigationItemList';

const Navigation = () => (
  <div>
    <ul>
      { NavigationItemList.map(({ name, href }) => (
        <li>
          <Anchor href={href}>{name}</Anchor>
        </li>
      )) }
    </ul>
  </div>
);

export default Navigation;
