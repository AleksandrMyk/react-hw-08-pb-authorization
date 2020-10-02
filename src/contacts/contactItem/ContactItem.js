import React from 'react';
import { connect } from 'react-redux';
import styles from './ContactItem.module.css';
import Operations from '../../redux/Operations';
import Selectors from '../../redux/Selectors';

const ContactItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contactBox}>
        <div className={styles.text}>
          <p>
            {name}: {number}
          </p>
        </div>
        <div className={styles.btnBox}>
          <button
            className={styles.itemBtn}
            onClick={onRemoveContact}
            type="button"
            title="delete"
          >
            Delete
          </button>
          <a
            href={`mailto:${name}@React-mail.JS`}
            title="mail"
            target="blank"
            className={styles.itemBtn}
          >
            mail
          </a>
        </div>
      </div>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const item = Selectors.getContId(state, ownProps.id);

  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(Operations.removeContacts(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
