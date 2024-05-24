import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function loader({ width = 50, height = 50 }) {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={true}
        height={height}
        width={width}
        color="grey"
        // strokeColor="#646cff"
        strokeColor="#323f47"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
