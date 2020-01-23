import React, { useState, useEffect, useRef } from "react";
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
const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];

const getMonthIndex = month => MONTHS.indexOf(month);

const DaySlot = props => {
  return (
    <td
      className={`slot${props.selected === props.value ? " selected" : ""}${
        props.today === props.value ? " today" : ""
      }`}
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
  };

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
  };

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
    <table className="mono__calendar--content-by-days">
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

const MonthSelector = props => {
  return (
    <div className="mono__calendar--content-by-months">
      {SHORT_MONTHS.map((month, index) => {
        return (<div key={index} className={`item`} onClick={() => props.onSelectMonth(index)}>
          {month}
        </div>);
      })}
    </div>
  );
};

const DatePicker = props => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment(props.value, props.format).isValid()
      ? moment(props.value, props.format)
      : moment()
  );
  const datePickerRef = useRef(null);

  // for display only
  const [month, setMonth] = useState(
    getMonthIndex(selectedDate.format("MMMM"))
  );
  const [year, setYear] = useState(selectedDate.format("YYYY"));

  const [display, setDisplay] = useState("BY_DAYS"); // BY_DAYS|BY_MONTHS|BY_YEARS

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
    setSelectedDate(moment());
    setMonth(moment().format("M") - 1);
    setYear(moment().format("YYYY"));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (datePickerRef && !datePickerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    // clean up
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []); // empty array => run only once

  // open
  return (
    <div
      ref={datePickerRef}
      className={`mono__datepicker--wrapper${open ? " open" : ""}`}
    >
      <Input
        value={selectedDate.format(props.format)}
        className="mono__datepicker--input"
        placeholder="Try me.."
        onFocus={() => setOpen(true)}
        suffix={<Icons.Calendar size={24} fill="#AEAEAE" />}
      />
      <div className="mono__calendar">
        <div className="mono__calendar--months">
          <div
            className="mono__calendar--months-prev-month"
            onClick={prevMonth}
          >
            <Icons.ArrowLeft size={16} />
          </div>
          <div className="mono__calendar--months-current">
            <span
              className="mono__calendar--months-current-month"
              onClick={() =>
                display === "BY_MONTHS"
                  ? setDisplay("BY_DAYS")
                  : setDisplay("BY_MONTHS")
              }
            >
              {MONTHS[month]}
            </span>
            <span
              className="mono__calendar--months-current-year"
              onClick={() =>
                display === "BY_YEARS"
                  ? setDisplay("BY_DAYS")
                  : setDisplay("BY_YEARS")
              }
            >
              {year}
            </span>
          </div>
          <div
            className="mono__calendar--months-next-month"
            onClick={nextMonth}
          >
            <Icons.ArrowRight size={16} />
          </div>
        </div>

        <div className="mono__calendar--content">
          {display === "BY_DAYS" && (
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
          )}
          {display === "BY_MONTHS" && <MonthSelector onSelectMonth={(monthIndex) => {
                setMonth(monthIndex);
                setDisplay("BY_DAYS")
          }}/>}
        </div>

        <div style={{ textAlign: "center" }}>
          <Button size="sm" onClick={goToToday}>
            Today
          </Button>
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
    "DD-MMM-YY"
  ])
};

DatePicker.defaultProps = {
  value: moment().format("YYYY-MM-DD"),
  format: "YYYY-MM-DD"
};

export default DatePicker;
