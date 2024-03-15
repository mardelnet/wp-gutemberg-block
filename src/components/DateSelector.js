import { DatePicker } from '@wordpress/components';

/**
 * Functional component for selecting a date.
 * @param {Object} props - The props for the component.
 * @param {Object} props.date - The selected date.
 * @param {boolean} props.isDatePickerVisible - Flag indicating whether the date picker is visible.
 * @param {Function} props.setIsDatePickerVisible - Function to toggle visibility of the date picker.
 * @param {Function} props.handleDateChange - Function to handle date change.
 * @param {Array} props.pressNotes - The array of press notes.
 * @param {Function} props.setPressNotes - Function to set press notes.
 * @param {Function} props.setAttributes - Function to set attributes.
 * @param {number} props.index - The index of the date selector component.
 * @returns {JSX.Element} The JSX for the DateSelector component.
 */
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
