import { useDispatch } from 'react-redux';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import s from './LogOutModal.module.css';
import { logOut } from '../../../redux/auth/operations';
import toast from 'react-hot-toast';
export const LogOutModal = ({ active, setActive }) => {
    const dispatch = useDispatch();

    const onClickLogout = () => {
        dispatch(logOut()).unwrap().then(() => {
            toast.success('You have successfully logged out');
            setActive(false);
        }).catch((error) => {
            console.log(error)
            toast.error('Something went wrong');
            setActive(false);
        });
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
          <SharedSVG svgId="close" width={24} height={24} className={s.icon} />
        </button>
      </div>
      <div className={s.div}>
        <h2 className={s.title}>Log out</h2>
        <p className={s.text}>Do you really want to leave?</p>
        <div className={s.divBtn}>
          <button type="button" className={s.btnLog} onClick={onClickLogout}>
            Log out
          </button>
          <button type="button" onClick={() => setActive(false)} className={s.btnCancel}>
            Cancel
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
