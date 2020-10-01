import React from 'react';
import { Link } from 'react-router-dom';
import style from './FooBar.module.css';

const FooBar = () => (
  <>
    <div className={style.fooBox}>
      <Link to="/login" className={style.fooLink}>
        login
      </Link>
      <Link to="/Register" className={style.fooLink}>
        reg now
      </Link>
      <Link to="/" className={style.fooLink}>
        home
      </Link>
    </div>
  </>
);

export default FooBar;
