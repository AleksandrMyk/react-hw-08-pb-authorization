import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './HomePage.module.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import FeedbackApp from '../feedback/FeedbackApp';
import FooApp from '../fooApp/FooApp';
import Header from '../header/Header';

class HomePage extends Component {
  state = {
    date: new Date(),
    time: new Date(),
  };

  onChange = date => this.setState({ date });

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <>
        <div className={style.secBox}>
          <Header />
          <section className={style.pacageBox}>
            <div>
              <Calendar
                className={style.calBox}
                onChange={this.onChange}
                value={this.state.date}
              />
            </div>
            <div className={style.clockBox}>
              <Clock value={this.state.time.toLocaleTimeString()} />
            </div>
            <div>
              <FeedbackApp />
            </div>
          </section>
          <FooApp />
        </div>
      </>
    );
  }
}

export default HomePage;
