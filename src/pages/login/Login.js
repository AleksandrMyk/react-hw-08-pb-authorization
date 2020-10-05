import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CSSTransition } from 'react-transition-group';
import { AuthOperations, AuthSelectors } from '../../redux/auth';
import style from './Login.module.css';
import Header from '../../header/Header';
import FooApp from '../../fooApp/FooApp';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const loginUser = { email, password };

    if ((email === '' && password === '') || email === '' || password === '') {
      alert('Enter your email and/or password');
    } else {
      this.props.onLogin(loginUser);
    }

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={style.secLog}>
        <Header />
        <section>
          <form className={style.contactForm} onSubmit={this.handleSubmit}>
            <CSSTransition
              in={true}
              appear={true}
              classNames={style}
              timeout={1200}
            >
              <h1 className={style.titleLog}>login form</h1>
            </CSSTransition>
            <label className={style.labelForm}>
              <input
                className={style.contactInput}
                name="email"
                value={email}
                onChange={e => this.handleEmail(e)}
                type="email"
                autoComplete="on"
                placeholder="e-mail"
              ></input>
            </label>
            <label className={style.labelForm}>
              <input
                className={style.contactInput}
                name="password"
                value={password}
                onChange={e => this.handlePassword(e)}
                type="password"
                autoComplete="off"
                placeholder=" password"
              ></input>
            </label>

            <button className={style.btnAdd} type="submit">
              login
            </button>
          </form>
        </section>
        <FooApp />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: AuthOperations.logIn,
};

export default compose(connect(null, mapDispatchToProps))(LoginPage);
