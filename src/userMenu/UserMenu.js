import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthSelectors, AuthOperations } from '../redux/auth';
import style from './UserMenu.module.css';
import PropTypes from 'prop-types';

const UserMenu = ({ name, onLogout }) => (
  <div className={style.fooBox}>
    <div className={style.userBox}>
      <img
        src={'https://wiki.bravofleet.com/images/4/43/No-avatar.png'}
        alt=""
        width="64px"
        className={style.avatar}
      />
      <span className={style.name}>Welcome, {name}</span>
    </div>
    <div className={style.menuBox}>
      <button className={style.menuLink} onClick={onLogout}>
        logout
      </button>

      <Link to="/" className={style.menuLink}>
        home
      </Link>
      <Link to="/contacts" className={style.menuLink}>
        contacts
      </Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  name: AuthSelectors.getUsername(state),
});

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { onLogout: AuthOperations.logOut })(
  UserMenu,
);
