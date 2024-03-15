import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { addPressNote } from './utils/pressNoteFunctions';
import { sliderSettingsWithArrows } from './utils/sliderSettings'

import PressNoteEditorItem from './components/PressNoteEditorItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const [pressNotes, setPressNotes] = useState(attributes.pressNotes || []);
    const [featuredIndex, setFeaturedIndex] = useState(null);
    const blockProps = useBlockProps();

    const addFeaturedPressNote = (index) => {
      setFeaturedIndex(index);
    };

    console.log(featuredIndex);

    return (
        <div {...blockProps}>
            <BlockControls>
                <button onClick={() => addPressNote(pressNotes, setPressNotes, setAttributes)}>Add Press Note</button>
            </BlockControls>

            <div className="header">
                <h2>Notas de Prensa</h2>
            </div>

            <div className="slider-container">
              {featuredIndex && pressNotes[featuredIndex] && (
                <div className="slider-container__featured">
                  <PressNoteEditorItem
                      pressNote={pressNotes[featuredIndex]}
                      attributes={attributes}
                      setAttributes={setAttributes}
                      pressNotes={pressNotes}
                      setPressNotes={setPressNotes}
                      isFeatured={true}
                  />
                </div>
              )}
              <div className="slider-container__slides">
                <Slider {...sliderSettingsWithArrows}>
                  {pressNotes.map((pressNote, index) => (
                    <PressNoteEditorItem
                        key={index}
                        pressNote={pressNote}
                        index={index}
                        attributes={attributes}
                        setAttributes={setAttributes}
                        pressNotes={pressNotes}
                        setPressNotes={setPressNotes}
                        addFeaturedPressNote={addFeaturedPressNote}
                        isFeatured={false}
                    />
                  ))}
                </Slider>
              </div>
            </div>
        </div>
    );
}
