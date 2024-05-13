import { useAuth } from '../../../hooks';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';

export const UserPanel = () => {
  const { isLoggedIn, user } = useAuth();
  if (isLoggedIn) {
    return (
      <div className={css.userPanel}>
        <p className={css.text}>
          Hello, <strong>{user ? user.name : 'Anonymous'}!</strong>
        </p>
        <UserBar />
      </div>
    );
  }
};
