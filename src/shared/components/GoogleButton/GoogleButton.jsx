import s from './GoogleButton.module.css';
import SharedSVG from '../SharedSVG/SharedSVG';
import { useTranslation } from 'react-i18next';

const GoogleButton = () => {
  const { t } = useTranslation();
  return (
    <>
      <a
        className={s.googleButton}
        href="http://localhost:3001/api/v1/auth/google"
      >
        <SharedSVG svgId="google" width={32} height={32} />

        {t('singInForm.googleButton.googleBtn')}
      </a>
    </>
  );
};

export default GoogleButton;
