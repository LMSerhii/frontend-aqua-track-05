import css from './SuccessVerify.module.css';
import Logo from '../../shared/components/Logo/Logo';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function SuccessVerify({ children }) {
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    const firstToastTimerId = setTimeout(() => {
      toast.success('You will be redirected to the login page after 5s');
    }, 1000);

    const thirdToastTimerId = setTimeout(() => {
      toast.success('Redirecting...');
    }, 4000);

    const redirectTimerId = setTimeout(() => {
      navigate('/signin');
    }, 5000);

    return () => {
      clearTimeout(firstToastTimerId);
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
          {t('SuccessVerify.goTo')}

          <NavLink to="/signin" className={css.link}>
            {t('SuccessVerify.signIn')}
          </NavLink>
        </p>
      </div>
    </div>
  );
}
