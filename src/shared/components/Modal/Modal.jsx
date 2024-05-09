import s from './Modal.module.css';

export const Modal = ({ active, setActive, children }) => {
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
        {children}
      </div>
    </div>
  );
};
