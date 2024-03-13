import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder, RichText, BlockControls } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { onChangeTitle, onChangeContent, setImageAttributes, addPressNote, removePressNote } from './pressNoteFunctions';
import PressNoteEditorItem from './PressNoteEditorItem';
import './editor.scss';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Edit({ attributes, setAttributes }) {
    const [pressNotes, setPressNotes] = useState(attributes.pressNotes || []);
    const blockProps = useBlockProps();

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
        <div {...blockProps}>
            <BlockControls>
                <button onClick={() => addPressNote(pressNotes, setPressNotes, setAttributes)}>Add Press Note</button>
            </BlockControls>

            <Slider {...settings}>
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
