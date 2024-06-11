import { useState } from 'react';
import iconArrow from './images/icon-arrow.svg'


function App() {
  const [day_error, setDayError] = useState('');
  const [month_error, setMonthError] = useState('');
  const [year_error, setYearError] = useState('');
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

const handleOnChange = (e, setFunction) =>{
  const inputItem = e.target.value;
  setFunction(inputItem)
}


const today = new Date();

const dateObj = {
  day: today.getDate(),
  month: today.getMonth() + 1,
  year: today.getFullYear(),
};


const getDate = () => {

  const day = parseInt(dayInput) - dateObj.day;
  const month = parseInt(monthInput) - dateObj.month;
  const year = parseInt(yearInput) - dateObj.year;

  console.log(`Day difference: ${day}`);
  console.log(`Month difference: ${month}`);
  console.log(`Year difference: ${year}`);
  console.log(dateObj.day, dateObj.month);
};

const dayError = () =>{
  if (dayInput == ""){
    setDayError('Field is required')
  } else if(dayInput > 31){
    setDayError('Must be a valid day')
  }
}

// const monthError = () =>{
//   if (condition) {
    
//   }
// }


const yearError = ()=>{
  if (yearInput > dateObj.year) {
    setYearError('Must be in the past')
     } else if(yearInput == ""){
      setYearError('Field is required')
    }
}

const onSubmit = () => {
  // if (dayInput == "" || monthInput == ""|| yearInput == "") {
  //   setError("Field is required");
  // } else {
  //   setError("");
    dayError();
    yearError()
    getDate();
  }

  return (
    <>
    <div className="container">
      <div className="form">
        <form action="" method="get">
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
        <img style={{
          background:'hsl(259, 100%, 65%)',
          borderRadius: '100%',
          padding: '.1rem',
          marginTop: '-40%',
          width: '50px',
          zIndex: 22,
          position: 'relative',
          cursor: 'pointer'
        }} src={iconArrow} alt="icon-arrow" className='img-btn'
        onClick={onSubmit}
        />
      </div>
      <div style={{
        color: 'hsl(0, 0%, 8%)',
        textAlign: 'start',
        fontSize: '25px',
        fontWeight: 800,
      }} className='reveal-date'>
        <p><span style={style}>{yearInput ? (dateObj.year-yearInput) : '--'}</span> {(dateObj.year-yearInput) > 1 ?  'years' : 'year'}</p>
        <p><span style={style}>{monthInput ? (dateObj.month -monthInput):'--'}</span>{(dateObj.month-monthInput) > 1 ?  'months' : 'month'}</p>
        <p><span style={style}>{dayInput ? (dateObj.day-dayInput) : '--'}</span>{(dateObj.day-dayInput) > 1 ?  'days' : 'day'}</p>
      </div>
    </div>
    </>
  )
}

const style = {
    color: 'hsl(259, 100%, 65%)',
    fontSize: '30px',
    fontWeight: 800
}

const emStyles = {
  fontSize: '10px',
  fontWeight: '200',
  color: 'hsl(0, 100%, 67%)'
}

export default App
