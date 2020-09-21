import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './styles.css';
import "react-day-picker/lib/style.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day});
    const event = {
      target: {
        name: "departureDate",
        value: day
      }
    }
    this.props.onChange(event);
    console.log(this.state);
    // console.log({day,a,b,c});
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div style={{ 
        color:"#192433"
        }}>
        {/* {selectedDay && <p >Day: {selectedDay.toLocaleDateString()}</p>} */}
        <DayPickerInput
        placeholder="Departing"
        selectedDay={selectedDay} 
        onDayChange={this.handleDayChange}
       />
      </div>
    );
  }
}