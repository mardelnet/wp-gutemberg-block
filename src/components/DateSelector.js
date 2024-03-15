import { DatePicker } from '@wordpress/components';

const DateSelector = ({ date, isDatePickerVisible, setIsDatePickerVisible, handleDateChange, pressNotes, setPressNotes, setAttributes, index }) => {
  return (
    <>
    <div className="single-press-note__date" onClick={() => { setIsDatePickerVisible(!isDatePickerVisible) }}>
      {!date && (
        <div>
          Select <span>date</span>
        </div>
      )}
      {date?.day && date?.month && (
        <div>
          <div className="single-press-note__date--day">{date.day}</div>
          <div className="single-press-note__date--month">{date.month}</div>
        </div>
      )}
    </div>

      {isDatePickerVisible && (
        <DatePicker 
          onChange={
            newDate => handleDateChange(
              pressNotes, setPressNotes, setAttributes, newDate, index, setIsDatePickerVisible)} />
      )}
    </>
  );
};

export default DateSelector;
