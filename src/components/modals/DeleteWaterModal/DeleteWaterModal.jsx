import { useRef } from 'react';
import Button from '../../../shared/components/Button/Button';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

import s from './DeleteWaterModal.module.css';
import { useDeleteEntryMutation } from '../../../redux/tracker/trackerApi';

export const DeleteWaterModal = ({ setActive, entry }) => {
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
        <h2 className={s.title}>Delete entry</h2>
        <p className={s.subscription}>
          Are you sure you want to delete the entry?
        </p>
        <div className={s.wrapBtn}>
          <Button classname={s.btnDelete} onClick={() => deleteEntry(entry)}>
            Delete
          </Button>

          <Button classname={s.btnCancel} onClick={() => setActive(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
