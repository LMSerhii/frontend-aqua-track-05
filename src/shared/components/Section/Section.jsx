import clsx from 'clsx';
import s from './Section.module.css';

const buildLinkClass = classname => {
  return clsx(s.section, classname && classname);
};

const Section = ({ className, children, ...props }) => {
  return (
    <section className={buildLinkClass(className)} {...props}>
      {children}
    </section>
  );
};
export default Section;
