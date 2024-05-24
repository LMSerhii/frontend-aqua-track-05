import Button from '../../../shared/components/Button/Button';
import css from './UserBarPopover.module.css';
import SharedSVG from '../../../shared/components/SharedSVG/SharedSVG';
import { useTranslation } from 'react-i18next';
export const UserBarPopover = ({
  isActive,
  setIsActive,
  setIsActiveSettings,
  setIsActiveLogout,
}) => {
  const { t } = useTranslation();

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
        {t('UserBarPopover.settingsBtn')}
      </Button>

      <Button onClick={handleLogout} className={css.logoutBtn}>
        <SharedSVG
          width="16"
          height="16"
          className={css.icon}
          svgId="log_out"
        />
        {t('UserBarPopover.logOutBtn')}
      </Button>
    </div>
  );
};
