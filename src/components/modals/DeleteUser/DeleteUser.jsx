// import s from './DeleteUser.module.css';
import Button from '../../../shared/components/Button/Button';
// import { useDispatch } from 'react-redux';
import { Modal } from '../../../shared/components/Modal/Modal';

export const DeleteUser = ({ active, setActive }) => {
  //   const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch()
    setActive(false);
  };

  return (
    <>
      <Modal active={active} setActive={setActive}>
        <p>Delete user</p>
        <Button onClick={handleClick}>Delete</Button>
        <Button onClick={() => setActive(false)}>Cancel</Button>
      </Modal>
    </>
  );
};
