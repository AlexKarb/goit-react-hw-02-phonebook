import { IoMdContact } from 'react-icons/io';
import { TiUserDelete } from 'react-icons/ti';
import PropTypes from 'prop-types';

import style from './Contact.module.css';
const { contact__item, contact__icon, contact__button, contact__container } =
  style;

const Contact = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li key={id} className={contact__item}>
      <div className={contact__container}>
        <IoMdContact className={contact__icon} />
        {name} : {number}
      </div>
      <button
        type="button"
        className={contact__button}
        onClick={() => onDelete(id)}
      >
        <TiUserDelete />
      </button>
    </li>
  ));

export default Contact;

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
