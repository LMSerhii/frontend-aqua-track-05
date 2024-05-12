import { NavLink } from 'react-router-dom';
import Logo from '../../../shared/components/Logo/Logo';
import Header from '../../header/Header';
import css from './WelcomeSection.module.css';
import { useTranslation } from 'react-i18next';

export default function WelcomeSection() {
  const { t } = useTranslation();
  return (
    <div className={css.section}>
      <Header />
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <div className={css.div}>
          <p className={css.parag}>Record daily water intake and track</p>
          <h1 className={css.h1}>{t('welcomePage.title')}</h1>
          <NavLink to="/signup" className={css.signup}>
            Try tracker
          </NavLink>
          <NavLink to="/signin" className={css.login}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}
