import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { addPressNote } from './pressNoteFunctions';

import PressNoteEditorItem from './PressNoteEditorItem';
import Slider from 'react-slick';
import sliderSettings from './utils/sliderSettings'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const [pressNotes, setPressNotes] = useState(attributes.pressNotes || []);
    const blockProps = useBlockProps();

    return (
        <div {...blockProps}>
            <BlockControls>
                <button onClick={() => addPressNote(pressNotes, setPressNotes, setAttributes)}>Add Press Note</button>
            </BlockControls>

            <div className="header">
              <div>
                <h2>Notas de Prensa</h2>
              </div>
              <div>
                <Icon icon="arrow-left-alt2" onClick={() => slider?.current?.slickPrev()} />
                <Icon icon="arrow-right-alt2" onClick={() => slider?.current?.slickNext()} />
              </div>
            </div>

            <Slider {...sliderSettings}>
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
            </Slider>
        </div>
    );
}
