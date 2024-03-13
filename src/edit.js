import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder, RichText, BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { onChangeTitle, onChangeContent, setImageAttributes, addPressNote, removePressNote } from './pressNoteFunctions';
import PressNoteEditorItem from './PressNoteEditorItem';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const [pressNotes, setPressNotes] = useState(attributes.pressNotes || []);
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <BlockControls>
                <button onClick={() => addPressNote(pressNotes, setPressNotes, setAttributes)}>Add Press Note</button>
            </BlockControls>
            {pressNotes.map((pressNote, index) => (
                <PressNoteEditorItem
                    key={index}
                    pressNote={pressNote}
                    index={index}
                    attributes={attributes}
                    setAttributes={setAttributes}
                    pressNotes={pressNotes}
                    setPressNotes={setPressNotes}
                />
            ))}
        </div>
    );
}
