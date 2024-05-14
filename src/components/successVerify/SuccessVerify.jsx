import css from './SuccessVerify.module.css';
import Logo from '../../shared/components/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function SuccessVerify({ children }) {
  useEffect(() => {
    const firstToastTimerId = setTimeout(() => {
      toast.success('You will be redirected to the login page after 7s');
    }, 1500);

    const secondToastTimerId = setTimeout(() => {
      toast.success('You will be redirected to the login page after 3s');
    }, 4000);

    const thirdToastTimerId = setTimeout(() => {
      toast.success('Redirecting...');
    }, 6500);

    const redirectTimerId = setTimeout(() => {
      window.location.href = '/signin';
    }, 8000);

    return () => {
      clearTimeout(firstToastTimerId);
      clearTimeout(secondToastTimerId);
      clearTimeout(thirdToastTimerId);
      clearTimeout(redirectTimerId);
    };
  }, []);

  return (
    <div className={css.section}>
      <div className={css.pad}>
        <div className={css.logo}>
          <Logo />
        </div>
        <img
          className={css.gif}
          src="https://i.ibb.co/PQW71Z1/11.gif"
          alt="Green Checkmark"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <h3 className={css.text}>{children}</h3>
        <p className={css.textLink}>
          Go to
          <NavLink to="/signin" className={css.link}>
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
}
