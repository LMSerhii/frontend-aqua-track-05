import { sprite } from '../../icons/index.js';

const SharedSVG = ({ svgId, ...props }) => {
  return (
    <>
      <svg {...props}>
        <use xlinkHref={`${sprite}#${svgId}`}></use>
      </svg>
    </>
  );
};

export default SharedSVG;
