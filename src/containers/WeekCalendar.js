import React, { Component } from 'react';

class WeekCalendar extends Component {
  render() {
    const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    return (
      <table
        className="WeekCalendar"
        style={{
          tableLayout: "fixed",
          width: "100%"
        }}>
        <thead>
          <tr>
            {
              weekDays.map((day, i) => {
                let dayDate = new Date(this.props.start);
                dayDate.setDate(dayDate.getDate() + i);
                let dateAbbr = dayDate.toLocaleString().split(',')[0];
                return (
                  <th key={i}>
                      {day}
                    <div style={{fontWeight: "normal"}}>
                      {dateAbbr}
                    </div>
                  </th>
                )
              })
            }
          </tr>
        </thead>
      </table>
    );
  }
}

export default WeekCalendar;
