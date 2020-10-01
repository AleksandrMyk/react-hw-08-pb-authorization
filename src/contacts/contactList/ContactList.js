import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';
import ContactItem from '../contactItem/ContactItem';
import Selectors from '../../redux/Selectors';

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
          <ContactItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  contacts: Selectors.getContacts(state),
});

export default connect(mapStateToProps)(ContactList);
