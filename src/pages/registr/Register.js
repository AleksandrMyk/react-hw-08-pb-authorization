import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import AuthOperations from '../../redux/auth/AuthOperations';
import style from './Register.module.css';
import Header from '../../header/Header';
import FooApp from '../../fooApp/FooApp';

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
      <div className={style.secReg}>
        <Header />
        <section>
          <form className={style.regForm} onSubmit={this.handleSubmit}>
            <CSSTransition
              in={true}
              appear={true}
              classNames={style}
              timeout={1000}
            >
              <h1 className={style.titleReg}>registration form</h1>
            </CSSTransition>
            <label className={style.labelForm}>
              <input
                className={style.regInput}
                name="name"
                value={name}
                onChange={this.handleChange}
                type="name"
                autoComplete="on"
                placeholder="name"
              ></input>
            </label>
            <label className={style.labelForm}>
              <input
                className={style.regInput}
                name="email"
                value={email}
                onChange={this.handleChange}
                type="email"
                autoComplete="on"
                placeholder="email"
              ></input>
            </label>
            <label className={style.labelForm}>
              <input
                className={style.regInput}
                name="password"
                value={password}
                onChange={this.handleChange}
                type="password"
                autoComplete="off"
                placeholder="password"
              ></input>
            </label>
            <button className={style.btnAdd} type="submit">
              reg me
            </button>
          </form>
        </section>
        <FooApp />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(AuthOperations.registerUser(credentials)),
});

export default compose(connect(null, mapDispatchToProps))(Register);
