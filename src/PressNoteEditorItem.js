import { __ } from '@wordpress/i18n';
import { MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { DatePicker, SelectControl, Icon } from '@wordpress/components';
import { useState } from '@wordpress/element';

import { 
  onChangeTitle, 
  onChangeContent, 
  setImageAttributes, 
  removePressNote, 
  parseDateString, 
  handleDateChange ,
  handleTypeChange
} from './pressNoteFunctions';

const PressNoteEditorItem = ({ pressNote, index, setAttributes, pressNotes, setPressNotes }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTypePickerVisible, setIsTypePickerVisible] = useState(false);

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

      <Icon 
        className="icon" 
        onClick={() => { setIsTypePickerVisible(!isTypePickerVisible) }}
        icon={pressNote?.selectedOption ?? 'admin-site'} 
      />
      
      {isTypePickerVisible && (
        <SelectControl
          label={''}
          value={pressNote.selectedOption}
          options={[
              { label: __('Icono 1'), value: 'admin-site' },
              { label: __('Icono 2'), value: 'admin-post' },
              { label: __('Icono 3'), value: 'admin-tools' },
              { label: __('Icono 4'), value: 'admin-comments' },
              { label: __('Icono 5'), value: 'admin-users' },
          ]}
          onChange={newIcon => handleTypeChange(pressNotes, setPressNotes, setAttributes, newIcon, index, setIsTypePickerVisible)}
        />
      )}

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
