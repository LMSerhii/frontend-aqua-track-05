import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../shared/components/Button/Button';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import { useDeleteEntryMutation } from '../../../redux/tracker/trackerApi';
import s from './DeleteWaterModal.module.css';

export const DeleteWaterModal = ({ setActive, entry }) => {
  const { t } = useTranslation();
  const modalRef = useRef();
  const [deleteEntry] = useDeleteEntryMutation();

  const handleCloseModal = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  return (
    <div className={s.content} onClick={handleCloseModal}>
      <div ref={modalRef} className={s.modal}>
        <Button className={s.close} onClick={() => setActive(false)}>
          <SharedSVG
            className={s.icon}
            width="28"
            height="28"
            svgId={'close'}
          />
        </Button>
        <h2 className={s.title}>{t('DeleteModal.deleteTitle')}</h2>
        <p className={s.subscription}>{t('DeleteModal.deleteSubtitle')}</p>
        <div className={s.wrapBtn}>
          <Button classname={s.btnDelete} onClick={() => deleteEntry(entry)}>
            {t('DeleteModal.delete')}
          </Button>

          <Button classname={s.btnCancel} onClick={() => setActive(false)}>
            {t('DeleteModal.cancel')}
          </Button>
        </div>
      </div>
    </div>
  );
};
