import { useState } from 'react';
import './App.css';

import left_arrow from './assets/arrow-90deg-left.svg';
import right_arrow from './assets/arrow-90deg-right.svg';

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function App() {
  const [selectDate, setSelectDate] = useState(new Date());

  const daysInMonth = () => {
    const daysArray = new Array(selectDate.getDay()).fill(null);
    for (let i = 1; i <= new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0).getDate(); i++) {
      daysArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(), i));
    }
    return daysArray;
  };
  const isSameDay=(date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  }

  const handleMonthChange = (event) => {
    setSelectDate(new Date(selectDate.getFullYear(), event.target.value, 1));
  };

  const handleYearChange = (event) => {
    setSelectDate(new Date(event.target.value, selectDate.getMonth(), 1));
  };
  const handleChangeMonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
  };
  const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectDate(new Date(newYear, selectDate.getMonth(), 1));
  }
  return (
    <>
      <div className="calender">
        <div className="header">
          <button onClick={() => setSelectDate(new Date(selectDate.getFullYear(), selectDate.getMonth() - 1, 1))}>
            <img src={left_arrow} alt="" />
          </button>
          <select value={selectDate.getMonth()} onChange={handleChangeMonth}>
            {months.map((month, index) => (
              <option value={index} key={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={selectDate.getFullYear()} onChange={handleChangeYear}>
            {Array.from({ length: 10 }, (_, index) => (
              <option value={selectDate.getFullYear() - index} key={index}>
                {selectDate.getFullYear() - index}
              </option>
            ))}
          </select>
          <button onClick={() => setSelectDate(new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 1))}>
            <img src={right_arrow} alt="" />
          </button>
        </div>
        <div className="daysOfWeek">
          {dayOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {daysInMonth().map((day, index) => (
            <div key={index} className={day ? (isSameDay(day, new Date()) ? 'day current':"day")  : 'empty'}>
              {day ? day.getDate() : ''}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;