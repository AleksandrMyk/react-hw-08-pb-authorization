import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import AuthOperations from '../../redux/auth/AuthOperations';
import style from './Register.module.css';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <section className={style.secReg}>
        <form className={style.regForm} onSubmit={this.handleSubmit}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={1500}
          >
            <h1 className={style.titleReg}>registration form</h1>
          </CSSTransition>
          <label className={style.labelForm}>
            name
            <input
              className={style.regInput}
              name="name"
              value={name}
              onChange={this.handleChange}
              type="name"
              autoComplete="off"
            ></input>
          </label>
          <label className={style.labelForm}>
            email
            <input
              className={style.regInput}
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              autoComplete="off"
            ></input>
          </label>
          <label className={style.labelForm}>
            password
            <input
              className={style.regInput}
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              autoComplete="off"
            ></input>
          </label>
          <button className={style.btnAdd} type="submit">
            reg me
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(AuthOperations.registerUser(credentials)),
});

export default compose(connect(null, mapDispatchToProps))(Register);
