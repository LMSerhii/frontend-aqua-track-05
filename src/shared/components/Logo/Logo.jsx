import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';

export default function Logo() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();

  return (
    <div>
      {!isLoggedIn ? (
        <NavLink to="/" className={css.logo}>
          {t('WelcomeSection.logo')}
        </NavLink>
      ) : (
        <NavLink to="tracker" className={css.logo}>
          {t('WelcomeSection.logo')}
        </NavLink>
      )}
    </div>
  );
}
