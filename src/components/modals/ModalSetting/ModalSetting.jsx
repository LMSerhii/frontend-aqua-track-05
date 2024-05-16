import s from './ModalSetting.module.css';

export const ModalSetting = ({ active, setActive, children }) => {
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
