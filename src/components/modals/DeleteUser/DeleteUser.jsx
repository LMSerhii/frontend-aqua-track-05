import s from './DeleteUser.module.css';
import Button from '../../../shared/components/Button/Button';
// import { useDispatch } from 'react-redux';
import { Modal } from '../../../shared/components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

export const DeleteUser = ({ active, setActive }) => {
  const { t } = useTranslation();
  //   const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch()
    setActive(false);
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
