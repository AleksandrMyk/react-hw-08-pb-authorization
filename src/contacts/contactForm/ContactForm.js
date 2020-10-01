import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import style from './ContactForm.module.css';
import Operations from '../../redux/Operations';

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

    this.props.onSubmit(name, number);
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
          Name
          <br />
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={3000}
          >
            <input
              className={style.contactInput}
              name="name"
              type="text"
              autoComplete="off"
              value={name}
              onChange={this.changeHandler}
            />
          </CSSTransition>
        </label>
        <label className={style.labelForm}>
          Number in format 00
          <br />
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={3000}
          >
            <input
              className={style.contactInput}
              name="number"
              type="tel"
              autoComplete="off"
              value={number}
              onChange={this.changeHandler}
              pattern="[0-9]{1}[0-9]{1}"
            />
          </CSSTransition>
        </label>

        <button className={style.btnAdd} type="submit">
          Add {name}
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: Operations.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
