import style from './Section.module.css';
import PropTypes from 'prop-types';

const { section, section_phonebook, section__title } = style;

const Section = ({ children, title }) => {
  const sectionClassName =
    title === 'Phonebook' ? `${section} ${section_phonebook}` : section;

  return (
    <div className={sectionClassName}>
      <h2 className={section__title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;

Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
};
