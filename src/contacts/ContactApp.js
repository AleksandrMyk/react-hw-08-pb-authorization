import React, { Component } from 'react';

import { connect } from 'react-redux';
import style from './ContactApp.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList.js';
import ContactFilter from './contactFilter/ContactFilter';
import Operations from '../redux/Operations';
import Selectors from '../redux/Selectors';
// import { AuthSelectors } from '../redux/auth';

class ContactApp extends Component {
  // componentDidMount() {
  //   // если видна кнопка контакты, тогда переходит на страницу логина
  //   if (!this.props.isAuthenticated) {
  //     this.props.history.replace('/login');
  //     return;
  //   }
  //   this.props.onGetContacts();
  // }
  // componentDidUpdate() {
  //   if (!this.props.isAuthenticated) {
  //     this.props.history.replace('/');
  //     return;
  //   }
  // }
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <>
        <section className={style.contBox}>
          {/* {this.props.isLoading && (
              <div className={style.spinner}>
                <h1>L..O..A..D..I..N..G</h1>
              </div>
            )} */}

          <ContactForm />
          <ContactFilter />
          <ContactList />
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: Selectors.getLoading(state),
  // isAuthenticated: AuthSelectors.isAuthenticated(state),
});
const mapDispatchToProps = {
  onGetContacts: Operations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactApp);
