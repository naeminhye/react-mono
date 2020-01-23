import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import moment from "moment";
import { Button, Icons, Input } from "components";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
// var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const getMonthIndex = month => MONTHS.indexOf(month);

const DaySlot = props => {
  return (
    <td
      className={`slot${props.selected === props.value ? " selected" : ""}${props.today === props.value ? " today" : ""}`}
      onClick={() => props.onSelectDay(props.value)}
    >
      <span className="mono__calendar--day">{props.value}</span>
    </td>
  );
};

const CalendarTable = props => {
  const { targetMonth, targetYear } = props;

  const getToday = () => {
    // check if month and year is the same
    if (
      parseInt(moment().format("M")) === targetMonth &&
      moment().format("YYYY") === targetYear
    ) {
      return parseInt(moment().format("D"));
    } else {
      return -1;
    }
  }

  const getSelectedDay = () => {
    // check if month and year is the same
    if (
      parseInt(props.selectedDate.format("M")) === targetMonth &&
      props.selectedDate.format("YYYY") === targetYear
    ) {
      return parseInt(props.selectedDate.format("D"));
    } else {
      return -1;
    }
  }

  const getFirstDayIndexOfMonth = () => {
    return WEEKDAYS.indexOf(
      moment(targetMonth + "/" + targetYear, "M/YYYY")
        .startOf("month")
        .format("ddd")
    );
  };
  const getDaysInMonth = () => {
    return moment(targetMonth + "/" + targetYear, "M/YYYY").daysInMonth();
  };

  const TableGenerator = () => {
    let table = [];
    let weekCount = 5;
    let dayCount = 1;
    if (getFirstDayIndexOfMonth() + getDaysInMonth() <= 28) {
      weekCount = 4;
    }

    // for each row
    for (let index = 0; index < weekCount; index++) {
      let weekContent = [];
      for (let _index = 0; _index < 7; _index++) {
        if (index === 0 && _index === 0 && getFirstDayIndexOfMonth() > 0) {
          weekContent.push(<td colSpan={getFirstDayIndexOfMonth()}>&nbsp;</td>);
          _index = getFirstDayIndexOfMonth() - 1;
        } else {
          if (dayCount <= getDaysInMonth()) {
            weekContent.push(
              <DaySlot
                today={getToday()}
                value={dayCount}
                selected={getSelectedDay()}
                onSelectDay={day => {
                  props.onSelectDayOfMonth(day);
                }}
              />
            );
            dayCount++;
          }
        }
      }
      table.push(<tr key={`week--${index}`}>{weekContent}</tr>);
    }
    return table;
  };

  return (
    <table>
      <thead>
        <tr>
          {WEEKDAYS.map((day, index) => (
            <th key={`weekday-header--${index}`}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>{TableGenerator()}</tbody>
    </table>
  );
};

const DatePicker = props => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment(props.value, props.format).isValid() ? moment(props.value, props.format) : moment()
  );

  // for display only
  const [month, setMonth] = useState(
    getMonthIndex(selectedDate.format("MMMM"))
  );
  const [year, setYear] = useState(selectedDate.format("YYYY"));

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const goToToday = () => {
    setSelectedDate(moment())
    setMonth(moment().format("M") - 1)
    setYear(moment().format("YYYY"));
    setOpen(false);
  }

  useEffect(() => {
    // console.log("selectedDate:", selectedDate);
  });

  // open
  return (
    <div className={`mono__datepicker--wrapper${open ? " open" : ""}`} 
      // onBlur={() => setOpen(false)}
      >
      <Input
        value={selectedDate.format(props.format)}
        className="mono__datepicker--input"
        placeholder="Try me.."
        onFocus={() => setOpen(true)}
        suffix={<Icons.Calendar size={24} fill="#AEAEAE"/>}
      />
      <div className="mono__calendar">
        <div className="mono__calendar--months">
          <div
            className="mono__calendar--months-prev-month"
            onClick={prevMonth}
          >
            &lt;
          </div>
          <div className="mono__calendar--months-current">
            <span className="mono__calendar--months-current-month">
              {MONTHS[month]}
            </span>
            <span className="mono__calendar--months-current-year">{year}</span>
          </div>
          <div
            className="mono__calendar--months-next-month"
            onClick={nextMonth}
          >
            &gt;
          </div>
        </div>
        <CalendarTable
          targetMonth={month + 1}
          targetYear={year}
          selectedDate={selectedDate}
          onSelectDayOfMonth={day => {
            setSelectedDate(
              moment(year + "-" + (month + 1) + "-" + day, "YYYY-M-D")
            );
            setOpen(false);
          }}
        />
        <div style={{textAlign: 'center'}}>
          <Button size="sm" onClick={goToToday}>Today</Button>
        </div>
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  format: PropTypes.oneOf([
    "YYYY-MM-DD",
    "YYYY/MM/DD",
    "M/D/YYYY",
    "M/D/YY",
    "MM/DD/YY",
    "MM/DD/YYYY",
    "YY/MM/DD",
    "DD-MMM-YY",
  ])
};

DatePicker.defaultProps = {
  value: moment().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD"
};

export default DatePicker;
