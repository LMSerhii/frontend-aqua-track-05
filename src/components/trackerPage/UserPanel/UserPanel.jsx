import { useAuth } from '../../../hooks';
import { UserBar } from '../UserBar/UserBar';
import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';

export const UserPanel = () => {
  const { isLoggedIn, user } = useAuth();
  const { t } = useTranslation();
  if (isLoggedIn) {
    return (
      <>
        <p className={css.text}>
          {t('UserPanel.helloText')}
          <strong>{user.name}!</strong>
        </p>
        <UserBar />
      </>
    );
  }
};
