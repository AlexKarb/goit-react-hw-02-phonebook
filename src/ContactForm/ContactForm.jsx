import style from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
const { phonebook, phonebook__button, input__label, input } = style;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e =>
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });

  saveContact = e => {
    e.preventDefault();
    this.checkIsContactInBook();
    this.resetForm();
  };

  checkIsContactInBook = () => {
    const normalizeName = this.state.name.toLowerCase();
    if (
      this.props.allContacts.find(
        ({ name }) => name.toLowerCase() === normalizeName,
      )
    ) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state.name, this.state.number);
    }
  };

  resetForm = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.saveContact} className={phonebook}>
        <label className={input__label}>
          Name
          <input
            className={input}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={this.inputChange}
            required
          />
        </label>
        <label className={input__label}>
          Number
          <input
            className={input}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={this.inputChange}
            required
          />
        </label>
        <button className={phonebook__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  allContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};
