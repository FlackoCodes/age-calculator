/* eslint-disable no-unused-vars */
import { useState } from "react";
import iconArrow from "./images/icon-arrow.svg";

function App() {
  const [days, setDays] = useState("days");
  const [months, setMonths] = useState("months");
  const [years, setYears] = useState("years");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [dayInput, setDayInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [yearInput, setYearInput] = useState("");

  const handleOnChange = (e, setFunction) => {
    const inputYear = document.getElementById("year");
    let inputItem = e.target.value;
    inputItem = inputItem.replace(/[^0-9]/g, "");

    if (e.target === inputYear && /^\d{0,4}$/.test(inputItem)) {
      setFunction(inputItem);
    }

    if (/^\d{0,2}$/.test(inputItem)) {
      setFunction(inputItem);
    }
  };

  const handleBlur = (value, setFunction, min, max) => {
    if (value === "") return;

    const numericValue = Number(value);

    if (numericValue < min) {
      setFunction(String(min));
    } else if (numericValue > max) {
      setFunction(String(max));
    }
  };

  let today = new Date();
  let dateObj = {
    day: today.getDate(),
    month: today.getMonth() + 1,
    year: today.getFullYear(),
  };

  let { day, month, year } = dateObj;

  function dayErrorCheck() {
    if (dayInput === "") {
      setDayError("Field is required");
      return;
    } else if (dayInput > 31) {
      setDayError("Must be a valid day");
      return;
    } else if (
      (monthInput == 4 ||
        monthInput == 6 ||
        monthInput == 9 ||
        monthInput == 11) &&
      dayInput > 30
    ) {
      setDayInput("30");
      return;
    } else if (monthInput == 2 && dayInput > 29) {
      setDayInput(29);
      return;
    } else {
      setDayError("");
      return;
    }
  }

  function monthErrorCheck() {
    if (monthInput > 12 || monthInput < 1) {
      setMonthError("Must be a valid month");
      return true;
    } else if (monthInput === "") {
      setMonthError("Field is required");
      return true;
    } else {
      setMonthError("");
      return false;
    }
  }

  function yearErrorCheck() {
    if (yearInput > dateObj.year) {
      setYearError("Must be in the past");
      return true;
    } else if (yearInput === "") {
      setYearError("Field is required");
      return true;
    } else {
      setYearError("");
      return false;
    }
  }

  function calculateAge() {
    const dayErr = dayErrorCheck();
    const monthErr = monthErrorCheck();
    const yearErr = yearErrorCheck();

    if (dayErr || monthErr || yearErr) {
      setDays("days");
      setMonths("months");
      setYears("years");
    } else {
      setDays(
        parseInt(day - dayInput) +
          (parseInt(day - dayInput) > 1 ? " days" : " day")
      );
      setMonths(
        parseInt(month - monthInput) +
          (parseInt(month - monthInput) === 1 ? " month" : " months")
      );
      setYears(
        parseInt(year - yearInput) +
          (parseInt(year - yearInput) > 1 ? " years" : " year")
      );
    }
  }

  function onSubmit() {
    calculateAge();
  }

  return (
    <>
      <div className="container">
        <div className="form">
          <form>
            <div className="form-group">
              <label htmlFor="day">DAY</label>
              <input
                min={1}
                max={31}
                type="number"
                id="day"
                placeholder="DD"
                value={dayInput}
                onChange={(e) => handleOnChange(e, setDayInput)}
                onBlur={() => handleBlur(dayInput, setDayInput, 1, 31)}
              />
              <em style={emStyles}>{dayError}</em>
            </div>
            <div className="form-group">
              <label htmlFor="month">MONTH</label>
              <input
                type="number"
                min={1}
                max={12}
                id="month"
                placeholder="MM"
                value={monthInput}
                onChange={(e) => handleOnChange(e, setMonthInput)}
                onBlur={() => handleBlur(monthInput, setMonthInput, 1, 12)}
              />
              <em style={emStyles}>{monthError}</em>
            </div>
            <div className="form-group">
              <label htmlFor="year">YEAR</label>
              <input
                type="number"
                max={dateObj.year}
                id="year"
                placeholder="YYYY"
                value={yearInput}
                onChange={(e) => handleOnChange(e, setYearInput)}
                onBlur={() =>
                  handleBlur(yearInput, setYearInput, 1980, dateObj.year)
                }
              />
              <em style={emStyles}>{yearError}</em>
            </div>
          </form>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
          className="hr-img"
        >
          <hr />
          <img
            style={imgStyle}
            src={iconArrow}
            alt="icon-arrow"
            className="img-btn"
            onClick={onSubmit}
          />
        </div>
        <div style={divStyle} className="reveal-date">
          <div>
            <p>
              <span style={style}></span>
              <span style={style}>--</span>
              {years}
            </p>
          </div>
          <p>
            <span style={style}>--</span>
            {months}
          </p>
          <p>
            <span style={style}>--</span>
            {days}
          </p>
        </div>
      </div>
    </>
  );
}

//   <div>
//     <input
//       type="number"
//       placeholder="Day"
//       value={dayInput}
//       onChange={(e) => handleOnChange(e, setDayInput)}
//     />
//     {dayError && <p>{dayError}</p>}

//     <input
//       type="number"
//       placeholder="Month"
//       value={monthInput}
//       onChange={(e) => handleOnChange(e, setMonthInput)}
//     />
//     {monthError && <p>{monthError}</p>}

//     <input
//       type="number"
//       placeholder="Year"
//       value={yearInput}
//       onChange={(e) => handleOnChange(e, setYearInput)}
//     />
//     {yearError && <p>{yearError}</p>}

//     <button onClick={onSubmit}>Calculate Age</button>

//     <div>
//       <p>{years}</p>
//       <p>{months}</p>
//       <p>{days}</p>
//     </div>
//   </div>
// );

let style = {
  color: "hsl(259, 100%, 65%)",
  fontSize: "30px",
  fontWeight: 800,
};

let emStyles = {
  fontSize: "10px",
  fontWeight: "200",
  color: "hsl(0, 100%, 67%)",
};

let imgStyle = {
  background: "hsl(259, 100%, 65%)",
  borderRadius: "100%",
  padding: ".1rem",
  marginTop: "-40%",
  width: "50px",
  zIndex: 22,
  position: "relative",
  cursor: "pointer",
};

let divStyle = {
  color: "hsl(0, 0%, 8%)",
  textAlign: "start",
  fontSize: "25px",
  fontWeight: 800,
};

export default App;
