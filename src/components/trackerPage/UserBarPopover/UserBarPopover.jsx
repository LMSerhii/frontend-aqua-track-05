import Button from '../../../shared/components/Button/Button';
import css from './UserBarPopover.module.css';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';

export const UserBarPopover = ({
  isActive,
  setIsActive,
  setIsActiveSettings,
  setIsActiveLogout,
}) => {
  const handleSetting = () => {
    setIsActiveSettings(true);
    setIsActive(false);
  };

  const handleLogout = () => {
    setIsActiveLogout(true);
    setIsActive(false);
  };

  return (
    <div className={`${css.wrapper} ${isActive ? css.active : ''}`}>
      <Button onClick={handleSetting} className={css.settingBtn}>
        <SharedSVG
          width="16"
          height="16"
          className={css.icon}
          svgId="settings"
        />
        Setting
      </Button>

      <Button onClick={handleLogout} className={css.logoutBtn}>
        <SharedSVG
          width="16"
          height="16"
          className={css.icon}
          svgId="log_out"
        />
        Log out
      </Button>
    </div>
  );
};
