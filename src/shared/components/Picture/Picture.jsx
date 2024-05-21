const Picture = ({
  mob,
  mob2x,
  tab,
  tab2x,
  desc,
  desc2x,
  className,
  width,
  height,
}) => {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={`${desc} 1x, ${desc2x} 2x`} />
      <source media="(min-width: 768px)" srcSet={`${tab} 1x, ${tab2x} 2x`} />
      <img
        srcSet={`${mob} 1x, ${mob2x} 2x`}
        className={className}
        width={width}
        height={height}
      />
    </picture>
  );
};

export default Picture;
