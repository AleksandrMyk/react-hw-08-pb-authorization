import React, { Component } from 'react';
import style from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <>
        <header className={style.header}>
          <nav>
            <h1 className={style.navTitle}>Welcome to pinkify!!</h1>
            <p className={style.subtitle}>your pink glasses place</p>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
