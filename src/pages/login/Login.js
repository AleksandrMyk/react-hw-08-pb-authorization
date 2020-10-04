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

  handleChange = e =>
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

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
              timeout={1000}
            >
              <h1 className={style.titleLog}>login form</h1>
            </CSSTransition>
            <label className={style.labelForm}>
              <input
                className={style.contactInput}
                name="email"
                value={email}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
