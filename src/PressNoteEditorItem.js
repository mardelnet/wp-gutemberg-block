import { __ } from '@wordpress/i18n';
import { MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { onChangeTitle, onChangeContent, setImageAttributes, removePressNote, parseDateString, handleDateChange } from './pressNoteFunctions';
import { DatePicker } from '@wordpress/components';
import { useState } from '@wordpress/element';

const PressNoteEditorItem = ({ pressNote, index, setAttributes, pressNotes, setPressNotes }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const date = parseDateString(pressNote.date);

  return (
    <div className="press-note__item">
      <MediaPlaceholder
        style={{ backgroundImage: `url(${pressNote.imageUrl})` }}
        className='main-image'
        accept="image/*"
        allowedTypes={['image']}
        onSelect={media => setImageAttributes(pressNotes, setPressNotes, setAttributes, media, index)}
        multiple={false}
        handleUpload={true}
        labels={{
          'title': '',
          'instructions': 'Update Image'
        }}
      />

      <RichText
        tagName="h3"
        onChange={newTitle => onChangeTitle(pressNotes, setPressNotes, setAttributes, newTitle, index)}
        value={pressNote.title}
        placeholder={__('Título...')}
      />

      <RichText
        tagName="p"
        onChange={newContent => onChangeContent(pressNotes, setPressNotes, setAttributes, newContent, index)}
        value={pressNote.content}
        placeholder={__('Contenido...')}
      />

      <div className="date" onClick={() => { setIsDatePickerVisible(!isDatePickerVisible) }}>
        {!date && (
          <div className="no-date">
            Select <span>date</span>
          </div>
        )}
        {date?.day && date?.month && (
          <div>
            <div className="day">{date.day}</div>
            <div className="month">{date.month}</div>
          </div>
        )}
      </div>

      {isDatePickerVisible && (
        <DatePicker onChange={newDate => handleDateChange(pressNotes, setPressNotes, setAttributes, newDate, index, setIsDatePickerVisible)} />
      )}

      <button
       className="remove-button"
       onClick={() => removePressNote(pressNotes, setPressNotes, setAttributes, index)}>
        x
      </button>
    </div>
  );
};

export default PressNoteEditorItem;
