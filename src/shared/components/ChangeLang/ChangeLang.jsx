import { useTranslation } from 'react-i18next';
import { sprite } from '../../icons/index';
import css from './ChangeLang.module.css';

const ChangeLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className={css.lngBtns}>
        <button
          className={css.lngBtn}
          type="button"
          onClick={() => changeLanguage('en')}
        >
          <svg width="18" height="18" className={css.iconFlag}>
            <use xlinkHref={`${sprite}#en-flag`}></use>
          </svg>
        </button>
        <span className={css.delimiter}>|</span>
        <button
          className={css.lngBtn}
          type="button"
          onClick={() => changeLanguage('ua')}
        >
          <svg width="18" height="18" className={css.iconFlag}>
            <use xlinkHref={`${sprite}#ua-flag`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default ChangeLang;
