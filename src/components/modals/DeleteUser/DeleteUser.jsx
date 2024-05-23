import s from './DeleteUser.module.css';
import toast from 'react-hot-toast';

import Button from '../../../shared/components/Button/Button';
import { Modal } from '../../../shared/components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import { useDispatch } from 'react-redux';
import { useDeleteUserMutation } from '../../../redux/authApi/authApi';
import { logOut } from '../../../redux/auth/authSlice';

export const DeleteUser = ({ active, setActive }) => {
  const [deleteUser] = useDeleteUserMutation();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClick = () => {
    deleteUser()
      .unwrap()
      .then(() => {
        toast.success(t('Errors.delete'));
        dispatch(logOut());
        setActive(false);
      })
      .catch(() => {
        toast.error(t('Errors.wrong'));
        setActive(false);
      });
  };

  return (
    <>
      <Modal active={active} setActive={setActive}>
        <div className={s.modalWrapper}>
          <Button className={s.close} onClick={() => setActive(false)}>
            <SharedSVG
              className={s.icon}
              width="28"
              height="28"
              svgId={'close'}
            />
          </Button>
          <p className={s.caption}></p>
          <div className={s.wrapBtn}>
            <Button classname={s.btnDelete} onClick={handleClick}></Button>
            <Button classname={s.btnCancel} onClick={() => setActive(false)}>
              {t('DeletePanel.cancelBtn')}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
