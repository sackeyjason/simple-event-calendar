import React, { Component } from 'react';
import WeekCalendar from './containers/WeekCalendar';

function getLatestStartDay(d) {
  // Find most recent Monday before/on date d.
  let e = d;
  let distanceFromMonday;
  if (d.getDay() > 0) {
    distanceFromMonday = d.getDay() - 1;
  } else {
    distanceFromMonday = 6;
  }
  e.setDate(d.getDate() - distanceFromMonday);
  return e;
}

class App extends Component {
  render() {
    let startDate = getLatestStartDay(new Date());
    return (
      <div className="App">
        <h1>Events</h1>
        <WeekCalendar
          start={startDate}
        />
      </div>
    );
  }
}

export default App;
