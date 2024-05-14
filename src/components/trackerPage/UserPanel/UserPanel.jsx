import { useAuth } from '../../../hooks';
import { UserBar } from '../UserBar/UserBar';
import s from './UserPanel.module.css';

export const UserPanel = () => {
  const { user } = useAuth();

  return (
    <>
      <p className={s.text}>
        Hello, <strong>{user.name}!</strong>
      </p>
      <UserBar />
    </>
  );
};
