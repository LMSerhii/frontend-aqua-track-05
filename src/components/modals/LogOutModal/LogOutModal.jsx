import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import s from './LogOutModal.module.css';
import toast from 'react-hot-toast';
import { useLogoutMutation } from '../../../redux/authApi/authApi';
import { logOut } from '../../../redux/auth/authSlice';

export const LogOutModal = ({ active, setActive }) => {
  const [logout] = useLogoutMutation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onClickLogout = () => {
    logout()
      .unwrap()
      .then(() => {
        toast.success(t('Errors.logout'));
        setActive(false);
      })
      .catch(() => {
        toast.error(t('Errors.wrong'));
        setActive(false);
      });

    dispatch(logOut());
  };
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${s.modalContent} ${s.active}` : `${s.modalContent}`
        }
        onClick={e => e.stopPropagation()}
      >
        <div className={s.closeDiv}>
          <button
            type="button"
            onClick={() => setActive(false)}
            className={s.btn}
          >
            <SharedSVG
              svgId="close"
              width={24}
              height={24}
              className={s.icon}
            />
          </button>
        </div>
        <div className={s.div}>
          <h2 className={s.title}>{t('LogOutModal.logOut')}</h2>
          <p className={s.text}>{t('LogOutModal.logOutSubtitle')}</p>
          <div className={s.divBtn}>
            <button type="button" className={s.btnLog} onClick={onClickLogout}>
              {t('LogOutModal.logOut')}
            </button>
            <button
              type="button"
              onClick={() => setActive(false)}
              className={s.btnCancel}
            >
              {t('DeleteModal.cancel')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
