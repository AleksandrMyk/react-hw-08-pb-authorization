import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import style from './ContactForm.module.css';
import NumberFormat from 'react-number-format';
import Operations from '../../redux/Operations';
import Selectors from '../../redux/Selectors';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const existedContacts = this.props.contacts.find(
      cont => cont.name === name,
    );

    if (existedContacts) {
      alert('CONTACT IS ALREADY ON BOARD!!!');
    } else if (name === '' || number === '') {
      alert(`BE CALM AND FIELD ALL FIELDS!!!`);
    } else {
      this.props.onSubmit({
        name: name,
        number: number,
      });
    }

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <CSSTransition
          in={true}
          appear={true}
          classNames={style}
          timeout={1000}
        >
          <h1 className={style.mainTitle}>Phonebook</h1>
        </CSSTransition>
        <label className={style.labelForm}>
          <input
            className={style.contactInput}
            name="name"
            type="text"
            autoComplete="off"
            value={name}
            onChange={this.changeHandler}
            placeholder="name"
          />
        </label>
        <label className={style.labelForm}>
          <NumberFormat
            className={style.contactInput}
            name="number"
            type="tel"
            autoComplete="off"
            value={number}
            onChange={this.changeHandler}
            format="+380 (##) ###-####"
            allowEmptyFormatting
            mask="_"
          />
        </label>

        <button className={style.btnAdd} type="submit">
          Add {name}
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  contacts: Selectors.getItems(state),
});
const mapDispatchToProps = {
  onSubmit: Operations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
