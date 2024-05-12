import s from './GoogleButton.module.css';
import SharedSVG from '../SharedSVG/SharedSVG';

const GoogleButton = () => {
  return (
    <>
      <a
        className={s.googleButton}
        href="http://localhost:3001/api/v1/auth/google"
      >
        <SharedSVG svgId="google" width={32} height={32} />
        Sign in with Google
      </a>
    </>
  );
};

export default GoogleButton;
