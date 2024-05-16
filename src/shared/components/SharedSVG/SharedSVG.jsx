import { sprite } from '../../icons/index.js';

const SharedSVG = ({ svgId, ...props }) => {
  return (
    <>
      <svg {...props}>
        <use href={`${sprite}#${svgId}`}></use>
      </svg>
    </>
  );
};

export default SharedSVG;
