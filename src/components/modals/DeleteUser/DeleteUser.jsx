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

  const handleClick = async () => {
    try {
      await deleteUser()
        .unwrap()
        .then(() => {
          toast.success('User deleted successfully ');
          setActive(false);
        })
        .catch(error => {
          console.log(error);
          toast.error('Something went wrong');
          setActive(false);
        });

      dispatch(logOut());
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Modal active={active} setActive={setActive}>
        <Button className={s.close} onClick={() => setActive(false)}>
          <SharedSVG
            className={s.icon}
            width="28"
            height="28"
            svgId={'close'}
          />
        </Button>
        <p className={s.caption}>{t('DeletePanel.deleteText')}</p>
        <div className={s.wrapBtn}>
          <Button classname={s.btnDelete} onClick={handleClick}>
            {t('DeletePanel.deleteBtn')}
          </Button>
          <Button classname={s.btnCancel} onClick={() => setActive(false)}>
            {t('DeletePanel.cancelBtn')}
          </Button>
        </div>
      </Modal>
    </>
  );
};
