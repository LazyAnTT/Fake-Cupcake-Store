import './PhoneNumber.scss';
import phoneIcon from '../Assets/Icons/phoneIcon.png';

const PhoneNumber = () => (
  <div
    className="phone-number"
  >
    <img
      src={phoneIcon}
      alt="Phone icon"
      className="phone-number__icon"
    />
    <p
      className="phone-number__text"
    >
      666-666-666
    </p>
  </div>
);

export default PhoneNumber;
