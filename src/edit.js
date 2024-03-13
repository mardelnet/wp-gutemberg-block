import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaPlaceholder, MediaReplaceFlow, BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const [pressNotes, setPressNotes] = useState(attributes.pressNotes || []);

    const blockProps = useBlockProps();

    const onChangeTitle = (newTitle, index) => {
        const updatedPressNotes = [...pressNotes];
        updatedPressNotes[index] = { ...updatedPressNotes[index], title: newTitle };
        setPressNotes(updatedPressNotes);
        setAttributes({ pressNotes: updatedPressNotes });
    };

    const onChangeContent = (newContent, index) => {
        const updatedPressNotes = [...pressNotes];
        updatedPressNotes[index] = { ...updatedPressNotes[index], content: newContent };
        setPressNotes(updatedPressNotes);
        setAttributes({ pressNotes: updatedPressNotes });
    };

    const setImageAttributes = (media, index) => {
        const updatedPressNotes = [...pressNotes];
        if (!media || !media.url) {
            updatedPressNotes[index] = { ...updatedPressNotes[index], imageUrl: null, imageId: null, imageAlt: null };
        } else {
            updatedPressNotes[index] = { ...updatedPressNotes[index], imageUrl: media.url, imageId: media.id, imageAlt: media.alt };
        }
        setPressNotes(updatedPressNotes);
        setAttributes({ pressNotes: updatedPressNotes });
    };

    const addPressNote = () => {
        setPressNotes([...pressNotes, { title: '', content: '', imageUrl: '', imageId: '', imageAlt: '' }]);
    };

    const removePressNote = index => {
        const updatedPressNotes = [...pressNotes];
        updatedPressNotes.splice(index, 1);
        setAttributes({ pressNotes: updatedPressNotes });
    };

    return (
        <div {...blockProps}>
            <BlockControls>
                <button onClick={addPressNote}>Add Press Note</button>
            </BlockControls>
            {pressNotes.map((pressNote, index) => (
                <div key={index} className="press-note__item">
                    {/* <BlockControls>
                        <MediaReplaceFlow
                            mediaId={pressNote.imageId}
                            mediaUrl={pressNote.imageUrl}
                            allowedTypes={['image']}
                            accept="image/*"
                            onSelect={media => setImageAttributes(media, index)}
                            name={!pressNote.imageUrl ? __('Add Image') : __('Replace Image')}
                        />
                        <button onClick={() => removePressNote(index)}>Remove Press Note</button>
                    </BlockControls> */}

                    <MediaPlaceholder
                        style={{ backgroundImage: `url(${pressNote.imageUrl})` }}
                        className='main-image'
                        accept="image/*"
                        allowedTypes={['image']}
                        onSelect={media => setImageAttributes(media, index)}
                        multiple={false}
                        handleUpload={true}
                        labels={{
                            'title': '',
                            'instructions': '',
                        }}
                    />

                    <RichText
                        tagName="h3"
                        onChange={newTitle => onChangeTitle(newTitle, index)}
                        allowedFormats={['core/bold', 'core/italic']}
                        value={pressNote.title}
                        placeholder={__('Write the press note title...')}
                    />

                    <RichText
                        tagName="p"
                        onChange={newContent => onChangeContent(newContent, index)}
                        allowedFormats={['core/bold', 'core/italic']}
                        value={pressNote.content}
                        placeholder={__('Write your press note content...')}
                    />
                </div>
            ))}
        </div>
    );
}
