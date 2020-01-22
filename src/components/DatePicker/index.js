import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Input from "../Input";
import Icons from "../Icons";
import moment from "moment";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DaySlot = props => {
  return (
    <td
      className={`slot${props.selected === props.value ? " selected" : ""}`}
      onClick={() => props.onSelectDay(props.value)}
    >
      <span className="mono__calendar--day">{props.value}</span>
    </td>
  );
};

const CalendarTable = props => {
  const { firstDayIndexOfMonth, daysInMonth } = props;
  const [selected, setSelected] = useState(props.selected || "");

  const TableGenerator = () => {
    let table = [];
    let weekCount = 5;
    let dayCount = 1;
    if (firstDayIndexOfMonth + daysInMonth <= 28) {
      weekCount = 4;
    }

    // for each row
    for (let index = 0; index < weekCount; index++) {
      let weekContent = [];
      for (let _index = 0; _index < 7; _index++) {
        if (index === 0 && _index === 0 && firstDayIndexOfMonth > 0) {
          weekContent.push(<td colSpan={firstDayIndexOfMonth}>&nbsp;</td>);
          _index = firstDayIndexOfMonth - 1;
        } else {
          if (dayCount <= daysInMonth) {
            weekContent.push(
              <DaySlot
                value={dayCount}
                selected={selected}
                onSelectDay={day => {
                  setSelected(day);
                  props.onSelectDayOfMonth(day);
                }}
              />
            );
            dayCount++;
          }
        }
      }
      table.push(<tr>{weekContent}</tr>);
    }
    return table;
  };

  return (
    <table>
      <thead>
        <tr>
          {weekdays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>{TableGenerator()}</tbody>
    </table>
  );
};

const DatePicker = props => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(moment(props.value));
  const [month, setMonth] = useState(selectedDate.format("M"));
  const [year, setYear] = useState(selectedDate.format("YYYY"));
  const getFirstDayIndexOfMonth = () => {
    return weekdays.indexOf(selectedDate.startOf("month").format("ddd"));
  };
  const getDaysInMonth = () => {
    return selectedDate.daysInMonth();
  };

  useEffect(() => {
    console.log("selectedDate:", selectedDate);
  });

  // open
  return (
    <div className={`mono__datepicker--wrapper${open ? " open" : ""}`}>
      <Input
        value={selectedDate.format("YYYY-MM-DD")}
        className="mono__datepicker--input"
        placeholder="Try me.."
        onFocus={() => setOpen(true)}
        // onBlur={() => setOpen(false)}
      />
      {/* <Icons.Calendar size={24} fill="#AEAEAE"/> */}
      <div className="mono__calendar">
        <div className="mono__calendar--months">
          <span className="mono__calendar--months-prev-month">&lt;</span>
          <div className="mono__calendar--months-current">
            <span className="mono__calendar--months-current-month">
              {selectedDate.format("MMMM")}
            </span>
            <span className="mono__calendar--months-current-year">
              {selectedDate.format("YYYY")}
            </span>
          </div>
          <span className="mono__calendar--months-next-month">&gt;</span>
        </div>
        <CalendarTable
            selected={selectedDate.format("D")}
          firstDayIndexOfMonth={getFirstDayIndexOfMonth()}
          daysInMonth={getDaysInMonth()}
          onSelectDayOfMonth={day => {
            console.log("current", moment(year + "-" + month + "-" + day, "YYYY-M-D").format("YYYY-MM-DD"));
            setSelectedDate(moment(year + "-" + month + "-" + day, "YYYY-M-D"))
            
          }}
        />
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

DatePicker.defaultProps = {
  value: moment().format("YYYY-MM-DD")
};

export default DatePicker;
