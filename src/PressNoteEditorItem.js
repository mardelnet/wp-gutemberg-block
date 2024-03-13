import { __ } from '@wordpress/i18n';
import { MediaPlaceholder, RichText } from '@wordpress/block-editor';
import { onChangeTitle, onChangeContent, setImageAttributes, removePressNote } from './pressNoteFunctions';

const PressNoteEditorItem = ({ pressNote, index, attributes, setAttributes, pressNotes, setPressNotes }) => {
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
                    'instructions': 'aa'
                }}
            />

            <RichText
                tagName="h3"
                onChange={newTitle => onChangeTitle(pressNotes, setPressNotes, setAttributes, newTitle, index)}
                allowedFormats={['core/bold', 'core/italic']}
                value={pressNote.title}
                placeholder={__('Write the press note title...')}
            />

            <RichText
                tagName="p"
                onChange={newContent => onChangeContent(pressNotes, setPressNotes, setAttributes, newContent, index)}
                allowedFormats={['core/bold', 'core/italic']}
                value={pressNote.content}
                placeholder={__('Write your press note content...')}
            />

            <button
             className="remove-button"
             onClick={() => removePressNote(pressNotes, setPressNotes, setAttributes, index)}>
              x
            </button>
        </div>
    );
};

export default PressNoteEditorItem;
