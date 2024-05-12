import css from './Header.module.css';
import { useTranslation } from 'react-i18next';

const UserAuth = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className={css.lngBtns}>
        <button
          className={`${css.lngBtn} ${
            i18n.language === 'en' ? `${css.active}` : ''
          }`}
          type="button"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className={`${css.lngBtn} ${
            i18n.language === 'ua' ? `${css.active}` : ''
          }`}
          type="button"
          onClick={() => changeLanguage('ua')}
        >
          UA
        </button>
      </div>
    </>
  );
};

export default UserAuth;
