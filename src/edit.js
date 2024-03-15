import { __ } from '@wordpress/i18n';
import { useBlockProps, BlockControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import {
	addPressNote,
	addFeaturedPressNote,
	removeFeaturedPressNote,
} from './utils/pressNoteFunctions';
import { sliderSettingsWithArrows } from './utils/sliderSettings';

import PressNoteEditorItem from './components/PressNoteEditorItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/editor.scss';

/**
 * Edit component for the Press Note block.
 * @param {Object}   props               - Props for the Edit component.
 * @param {Object}   props.attributes    - Block attributes.
 * @param {Function} props.setAttributes - Function to set block attributes.
 * @return {JSX.Element} The Edit component.
 */
export default function Edit( { attributes, setAttributes } ) {
	const [ pressNotes, setPressNotes ] = useState(
		attributes.pressNotes || []
	);
	const [ featuredIndex, setFeaturedIndex ] = useState(
		attributes.featuredPressNote
	);
	const blockProps = useBlockProps();

	useEffect( () => {
		if ( pressNotes.length === 0 ) {
			addPressNote( pressNotes, setPressNotes, setAttributes );
		}
	}, [] );

	return (
		<div { ...blockProps }>
			<BlockControls>
				<button
					onClick={ () =>
						addPressNote( pressNotes, setPressNotes, setAttributes )
					}
				>
					Add Press Note
				</button>
			</BlockControls>

			<div className="header">
				<h2>Notas de Prensa</h2>
			</div>

			<div className="slider-container">
				{ featuredIndex !== null && pressNotes[ featuredIndex ] && (
					<div className="slider-container__featured">
						<PressNoteEditorItem
							pressNote={ pressNotes[ featuredIndex ] }
							attributes={ attributes }
							setAttributes={ setAttributes }
							pressNotes={ pressNotes }
							setPressNotes={ setPressNotes }
							isFeatured={ true }
							setFeaturedIndex={ setFeaturedIndex }
							removeFeaturedPressNote={ removeFeaturedPressNote }
							index={ featuredIndex }
						/>
					</div>
				) }
				<div className="slider-container__slides">
					<Slider { ...sliderSettingsWithArrows }>
						{ pressNotes.map( ( pressNote, index ) => (
							<PressNoteEditorItem
								key={ index }
								pressNote={ pressNote }
								index={ index }
								attributes={ attributes }
								setAttributes={ setAttributes }
								pressNotes={ pressNotes }
								setPressNotes={ setPressNotes }
								setFeaturedIndex={ setFeaturedIndex }
								addFeaturedPressNote={ addFeaturedPressNote }
								isFeatured={ false }
							/>
						) ) }
					</Slider>
				</div>
			</div>
		</div>
	);
}
