import { useAuth } from '../../../hooks';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';

export const UserPanel = () => {
  const { isLoggedIn, user } = useAuth();
  if (isLoggedIn) {
    return (
      <>
        <p className={css.text}>
          Hello, <strong>{user.name}!</strong>
        </p>
        <UserBar />
      </>
    );
  }
};
