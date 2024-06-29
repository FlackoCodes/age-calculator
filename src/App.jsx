/* eslint-disable no-unused-vars */
import { useState } from 'react';
import iconArrow from './images/icon-arrow.svg'


function App() {
  let [ days, setDays ] = useState('days');
  let [ months, setMonths ] = useState('months');
  let [ years, setYears ] = useState('years');
  let [ day_error, setDayError ] = useState(false);
  let [ month_error, setMonthError ] = useState(false);
  let [ year_error, setYearError ] = useState(false);
  let [ dayInput, setDayInput ] = useState("");
  let [ monthInput, setMonthInput ] = useState("");
  let [ yearInput, setYearInput ] = useState("");

let handleOnChange = (e, setFunction) =>{
  let inputItem = e.target.value;
  setFunction(inputItem)
}

let today = new Date();

let dateObj = {
  day: today.getDate(),
  month: today.getMonth() + 1,
  year: today.getFullYear(),
};

let { day, month, year} = dateObj;

  function dayError() {
    if (dayInput == "") {
      setDayError('Field is required');
    } else if (dayInput > 31) {
      setDayError('Must be a valid day');
    } else if ((monthInput == 4 || monthInput == 6 ||
       monthInput == 9 || monthInput == 11) 
      && dayInput > 30) {
      setDayError("Must be a valid day");
    } else if (monthInput == 2 && dayInput > 29) {
      setDayError('Must be a valid input');
    }
  }

  function monthError() {
    if (monthInput > 12 || monthError < 1) {
      setMonthError('Must be a valid month');
    } else if (monthInput == '') {
      setMonthError('Field is required');
    }
  }

  function yearError() {
    if (yearInput > dateObj.year) {
      setYearError('Must be in the past');
    } else if (yearInput == "") {
      setYearError('Field is required');
    }
  }

  function calculateAge() {
    if (day_error || month_error || year_error) {
      setDays(days);
      setMonths(months);
      setYears(years);
    } else {
      console.log(day_error, month_error, year_error);
      setDays((parseInt(dayInput - day) + ((days > 1) ? 'days' : 'day')));
      setMonths(parseInt(monthInput - month) + ((months > 1) ? 'months' : 'month'));
      setYears(parseInt(yearInput - year) + ((years > 1) ? 'years' : 'year'));
    }
  }

  function onSubmit() {
    dayError()
    monthError()
    yearError()
    calculateAge()
  }
 
  return (
    <>
    <div className="container">
      <div className="form">
        <form>
              <div className="form-group">
                <label htmlFor="day">DAY</label>
                <input type="number"  id="day" placeholder='DD'
                onChange={(e)=>handleOnChange(e, setDayInput)}
                />
                <em style={emStyles}>{day_error}</em>
              </div>
              <div className="form-group">
                <label htmlFor="month">MONTH</label>
                <input type="number" id="month" placeholder='MM'
                onChange={(e)=>handleOnChange(e, setMonthInput)}
                />
                <em style={emStyles}>{month_error}</em>
              </div>
              <div className="form-group">
                <label htmlFor="year">YEAR</label>
                <input type="number" id="year" placeholder='YYYY'
                onChange={(e)=>handleOnChange(e, setYearInput)}
                />
                <em style={emStyles}>{year_error}</em>
              </div>
        </form>
      </div>
      <div style={{
          textAlign: 'center',
      }} className='hr-img'>
        <hr />
        <img style={imgStyle} src={iconArrow} alt="icon-arrow" className='img-btn'
        onClick={onSubmit}
        />
      </div>
       <div style={divStyle} className='reveal-date'>
       <div>
         <p>
            <span style={style}>
              </span>
                <span style={style}>--</span>
                {years}
                </p>
       </div>
       <p>
          <span style={style}>
            --
            </span>{months}
            </p>
        <p>
          <span style={style}>
            --
          </span>
          {days}
        </p>
      </div>
    </div>
    </>
  )
}

let style = {
    color: 'hsl(259, 100%, 65%)',
    fontSize: '30px',
    fontWeight: 800
}

let emStyles = {
  fontSize: '10px',
  fontWeight: '200',
  color: 'hsl(0, 100%, 67%)'
}

let imgStyle = {
  background:'hsl(259, 100%, 65%)',
  borderRadius: '100%',
  padding: '.1rem',
  marginTop: '-40%',
  width: '50px',
  zIndex: 22,
  position: 'relative',
  cursor: 'pointer'
}

let divStyle = {
  color: 'hsl(0, 0%, 8%)',
  textAlign: 'start',
  fontSize: '25px',
  fontWeight: 800
}

export default App
