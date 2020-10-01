import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CSSTransition } from 'react-transition-group';
import authOperations from '../../redux/auth/AuthOperations';
// import withAuthRedirect from '../../Common/hoc/withAuthRedirect';
import style from './Login.module.css';

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
      <section className={style.secLog}>
        <form className={style.contactForm} onSubmit={this.handleSubmit}>
          <CSSTransition
            in={true}
            appear={true}
            classNames={style}
            timeout={1500}
          >
            <h1 className={style.titleLog}>login form</h1>
          </CSSTransition>
          <label className={style.labelForm}>
            e-mail
            <br />
            <input
              className={style.contactInput}
              name="email"
              value={email}
              onChange={this.handleChange}
              type="email"
              autoComplete="off"
            ></input>
          </label>
          <label className={style.labelForm}>
            password
            <br />
            <input
              className={style.contactInput}
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              autoComplete="off"
            ></input>
          </label>

          <button className={style.btnAdd} type="submit">
            login
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default compose(connect(null, mapDispatchToProps))(LoginPage);
