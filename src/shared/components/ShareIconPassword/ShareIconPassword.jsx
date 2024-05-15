import { sprite } from '../../../shared/icons/index.js';
import SharedSVG from '../SharedSVG/SharedSVG';

export const ShareIconPassword = ({ name, iconId, css}) => {
  const onClickIcon = (name, iconId) => {
    if (document.getElementById(name).type === 'password') {
      document.getElementById(name).type = 'text';
      document
        .getElementById(iconId)
        .querySelector('use')
        .setAttribute('href', `${sprite}#eye-password-open`);
    } else {
      document.getElementById(name).type = 'password';
      document
        .getElementById(iconId)
        .querySelector('use')
        .setAttribute('href', `${sprite}#eye-password-close`);
    }
  };

  return (
    <button className={css.divIcon} type="button">
      <SharedSVG
        id={iconId}
        svgId="eye-password-close"
        width={30}
        height={30}
        onClick={() => onClickIcon(name, iconId)}
      />
    </button>
  );
};
