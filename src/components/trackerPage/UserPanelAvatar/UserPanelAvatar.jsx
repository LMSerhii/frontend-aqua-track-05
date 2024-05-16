import s from './UserPanelAvatar.module.css';
import defaultAvatar from '../../../shared/images/homePage/Rectangle22x-min.png';

const UserPanelAvatar = ({ user }) => {
  return (
    <div className={s.thumb}>
      <img
        // src={user ? user.avatar : defaultAvatar}
        src={defaultAvatar}
        alt="User avatar"
        className={s.img}
      />
    </div>
  );
};

export default UserPanelAvatar;
