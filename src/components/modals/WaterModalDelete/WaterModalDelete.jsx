import { useRef } from 'react';
import Button from '../../../shared/components/Button/Button';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import s from './WaterModalDelete.module.css';

export const WaterModalDelete = ({ setActive, id }) => {
  const modalRef = useRef();

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

        <h3 className={s.title}>Delete entry</h3>
        <p className={s.subtitle}>Are you sure you want to delete the entry?</p>
        <Button>Delete</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
};
