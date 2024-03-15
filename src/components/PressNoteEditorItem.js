import { __ } from '@wordpress/i18n';
import { MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { SelectControl, Icon } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import DateSelector from './DateSelector';

import { 
  onChangeTitle, 
  onChangeContent, 
  setImageAttributes, 
  removePressNote, 
  parseDateString, 
  handleDateChange ,
  handleTypeChange
} from '../utils/pressNoteFunctions';

const PressNoteEditorItem = ({ pressNote, index, setAttributes, pressNotes, setPressNotes, addFeaturedPressNote, isFeatured }) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTypePickerVisible, setIsTypePickerVisible] = useState(false);
  const date = parseDateString(pressNote.date);

  const handleAddFeatured = () => {
    addFeaturedPressNote(index);
  };

  return (
    <div className="single-press-note">
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
          'instructions': ''
        }}
      />

      <Icon 
        className="single-press-note__icon" 
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
        className="single-press-note__title"
        tagName="h3"
        onChange={newTitle => onChangeTitle(pressNotes, setPressNotes, setAttributes, newTitle, index)}
        value={pressNote.title}
        placeholder={__('Add title...')}
      />

      <RichText
        className="single-press-note__content"
        tagName="p"
        onChange={newContent => onChangeContent(pressNotes, setPressNotes, setAttributes, newContent, index)}
        value={pressNote.content}
        placeholder={__('Add description...')}
      />

      <DateSelector
        date={date}
        isDatePickerVisible={isDatePickerVisible}
        setIsDatePickerVisible={setIsDatePickerVisible}
        handleDateChange={handleDateChange}
        pressNotes={pressNotes}
        setPressNotes={setPressNotes}
        setAttributes={setAttributes}
        index={index}
      />

      {!isFeatured && (
        <>
        <button
          className="single-press-note__remove-button"
          onClick={() => removePressNote(pressNotes, setPressNotes, setAttributes, index)}>
          Remove item
        </button>

        <button className="single-press-note__featured-button" onClick={handleAddFeatured}>
          {__('Add as Featured')}
        </button>
        </>
      )}

      {isFeatured && (
        <>
        <button className="single-press-note__featured-button" onClick={handleAddFeatured}>
          {__('Removed as Featured')}
        </button>
        </>
      )}
    </div>
  );
};

export default PressNoteEditorItem;
