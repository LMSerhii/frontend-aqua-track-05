import s from './Logo.module.css';
import { BsStars } from 'react-icons/bs';

const Logo = () => {
  return (
    <div className={s.logoWrapper}>
      <BsStars />
      <p>Logo</p>
    </div>
  );
};

export default Logo;
