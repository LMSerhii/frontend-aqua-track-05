import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSlice';
export default function Logo() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {!isLoggedIn ? (
        <NavLink to="/" className={css.logo}>
          AQUATRACK
        </NavLink>
      ) : (
        <NavLink to="tracker" className={css.logo}>
          AQUATRACK
        </NavLink>
      )}
    </div>
  );
}
