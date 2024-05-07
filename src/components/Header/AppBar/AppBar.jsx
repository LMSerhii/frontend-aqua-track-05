import css from './AppBar.module.css';
import { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Logo from '../Logo/Logo';
import { useAuth } from '../../../hooks';

export default function AppBar() {
  const [isMobileView, setIsMobileView] = useState(false);
  const { isLoggedIn } = useAuth();

  const mquery = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setIsMobileView(mquery);
  }, [mquery]);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <Logo />
        <div>{isMobileView ? <Navigation /> : <NavigationMobile />}</div>
      </nav>
    </header>
  );
}
