import './App.css';
import './script';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {

  const [value, onChange] = useState(new Date());

  return (
    <div className="App">

      <div className="container">
          <h1>CountDown Timer</h1>
          <div id="line"></div>
          <p id="timer"></p>
      </div>

      <div className="calendar" >
        <p>Pick your date here</p>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
      
    </div>
  );
}

export default App;
