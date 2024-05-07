import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        color="grey"
        strokeColor="#646cff"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
