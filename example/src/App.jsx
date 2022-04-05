import React from 'react';
import Calendar from 'react-awesome-calendar';
import styles from './themes/app.scss';

const events = [{
  id: 1,
  color: '#fd3153',
  from: '2022-04-03T18:00:00+00:00',
  to: '2022-04-03T19:00:00+00:00',
  title: 'Seeing family',
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.calendar = React.createRef();
  }

  componentDidMount() {
    const details = this.calendar.current.getDetails();
    // call get events endpoint
  }

  render() {
    return (
      <div className={styles.pageCalendar}>
        <Calendar
          ref={this.calendar}
          onClickEvent={id => console.log('this is an event id', id)}
          onChange={dates => console.log(dates)}
          onClickTimeLine={date => console.log(date)}
          events={events}
        />
      </div>
    );
  }
}

export default App;
