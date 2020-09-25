import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList.js';
import ContactFilter from './contactFilter/ContactFilter.js';
import Operations from './redux/Operations';
import ParticlesBg from 'particles-bg';
import Selectors from './redux/Selectors';

class App extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    return (
      <>
        <section className={style.sec}>
          <div className={style.box}>
            <ParticlesBg color="#ffffff" num={400} type="lines" bg={true} />
            {this.props.isLoading && (
              <div className={style.spinner}>
                <h1>L..O..A..D..I..N..G</h1>
              </div>
            )}
            <CSSTransition
              in={true}
              appear={true}
              classNames={style}
              timeout={4000}
            >
              <h1 className={style.mainTitle}>Phonebook</h1>
            </CSSTransition>
            <ContactForm />
            <ContactFilter />
            <ContactList />
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: Selectors.getLoading(state),
});
const mapDispatchToProps = {
  onGetContacts: Operations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
