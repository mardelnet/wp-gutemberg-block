/**
 * Updates the title of a press note.
 * @param {Array}    pressNotes    - Array of press notes.
 * @param {Function} setPressNotes - Function to set press notes.
 * @param {Function} setAttributes - Function to set attributes.
 * @param {string}   newTitle      - New title.
 * @param {number}   index         - Index of the press note to update.
 */
export const onChangeTitle = (
	pressNotes,
	setPressNotes,
	setAttributes,
	newTitle,
	index
) => {
	const updatedPressNotes = [ ...pressNotes ];
	updatedPressNotes[ index ] = {
		...updatedPressNotes[ index ],
		title: newTitle,
	};
	setPressNotes( updatedPressNotes );
	setAttributes( { pressNotes: updatedPressNotes } );
};

/**
 * Updates the content of a press note.
 * @param {Array}    pressNotes    - Array of press notes.
 * @param {Function} setPressNotes - Function to set press notes.
 * @param {Function} setAttributes - Function to set attributes.
 * @param {string}   newContent    - New content.
 * @param {number}   index         - Index of the press note to update.
 */
export const onChangeContent = (
	pressNotes,
	setPressNotes,
	setAttributes,
	newContent,
	index
) => {
	const updatedPressNotes = [ ...pressNotes ];
	updatedPressNotes[ index ] = {
		...updatedPressNotes[ index ],
		content: newContent,
	};
	setPressNotes( updatedPressNotes );
	setAttributes( { pressNotes: updatedPressNotes } );
};

/**
 * Handles the change of date for a press note.
 * @param {Array}    pressNotes             - Array of press notes.
 * @param {Function} setPressNotes          - Function to set press notes.
 * @param {Function} setAttributes          - Function to set attributes.
 * @param {Date}     date                   - New date.
 * @param {number}   index                  - Index of the press note to update.
 * @param {Function} setIsDatePickerVisible - Function to set visibility of date picker.
 */
export const handleDateChange = (
	pressNotes,
	setPressNotes,
	setAttributes,
	date,
	index,
	setIsDatePickerVisible
) => {
	const updatedPressNotes = [ ...pressNotes ];
	updatedPressNotes[ index ] = { ...updatedPressNotes[ index ], date };
	setPressNotes( updatedPressNotes );
	setIsDatePickerVisible( false );
	setAttributes( { pressNotes: updatedPressNotes } );
};

/**
 * Handles the change of type for a press note.
 * @param {Array}    pressNotes             - Array of press notes.
 * @param {Function} setPressNotes          - Function to set press notes.
 * @param {Function} setAttributes          - Function to set attributes.
 * @param {string}   newOption              - New option.
 * @param {number}   index                  - Index of the press note to update.
 * @param {Function} setIsTypePickerVisible - Function to set visibility of type picker.
 */
export const handleTypeChange = (
	pressNotes,
	setPressNotes,
	setAttributes,
	newOption,
	index,
	setIsTypePickerVisible
) => {
	const updatedPressNotes = [ ...pressNotes ];
	updatedPressNotes[ index ] = {
		...updatedPressNotes[ index ],
		selectedOption: newOption,
	};
	setPressNotes( updatedPressNotes );
	setIsTypePickerVisible( false );
	setAttributes( { pressNotes: updatedPressNotes } );
};

/**
 * Sets image attributes for a press note.
 * @param {Array}    pressNotes    - Array of press notes.
 * @param {Function} setPressNotes - Function to set press notes.
 * @param {Function} setAttributes - Function to set attributes.
 * @param {Object}   media         - Media object.
 * @param {number}   index         - Index of the press note to update.
 */
export const setImageAttributes = (
	pressNotes,
	setPressNotes,
	setAttributes,
	media,
	index
) => {
	const updatedPressNotes = [ ...pressNotes ];
	if ( ! media || ! media.url ) {
		updatedPressNotes[ index ] = {
			...updatedPressNotes[ index ],
			imageUrl: null,
			imageId: null,
			imageAlt: null,
		};
	} else {
		updatedPressNotes[ index ] = {
			...updatedPressNotes[ index ],
			imageUrl: media.url,
			imageId: media.id,
			imageAlt: media.alt,
		};
	}
	setPressNotes( updatedPressNotes );
	setAttributes( { pressNotes: updatedPressNotes } );
};

/**
 * Adds a new press note.
 * @param {Array}    pressNotes    - Array of press notes.
 * @param {Function} setPressNotes - Function to set press notes.
 * @param {Function} setAttributes - Function to set attributes.
 */
export const addPressNote = ( pressNotes, setPressNotes, setAttributes ) => {
	const newPressNote = {
		title: '',
		content: '',
		imageUrl: '',
		imageId: '',
		imageAlt: '',
	};
	setPressNotes( [ ...pressNotes, newPressNote ] );
	setAttributes( { pressNotes: [ ...pressNotes, newPressNote ] } );
};

/**
 * Removes a press note.
 * @param {Array}    pressNotes    - Array of press notes.
 * @param {Function} setPressNotes - Function to set press notes.
 * @param {Function} setAttributes - Function to set attributes.
 * @param {number}   index         - Index of the press note to remove.
 */
export const removePressNote = (
	pressNotes,
	setPressNotes,
	setAttributes,
	index
) => {
	const updatedPressNotes = [ ...pressNotes ];
	updatedPressNotes.splice( index, 1 );
	setPressNotes( updatedPressNotes );
	setAttributes( { pressNotes: updatedPressNotes } );
};

/**
 * Adds a press note as featured.
 * @param {Function} setFeaturedIndex - Function to set the index of the featured press note.
 * @param {Function} setAttributes    - Function to set attributes.
 * @param {number}   index            - Index of the press note to add as featured.
 */
export const addFeaturedPressNote = (
	setFeaturedIndex,
	setAttributes,
	index
) => {
	setFeaturedIndex( index );
	setAttributes( { featuredPressNote: index } );
};

/**
 * Removes a press note as featured.
 * @param {Function} setFeaturedIndex - Function to set the index of the featured press note.
 * @param {Function} setAttributes    - Function to set attributes.
 */
export const removeFeaturedPressNote = ( setFeaturedIndex, setAttributes ) => {
	setFeaturedIndex( null );
	setAttributes( { featuredPressNote: null } );
};

/**
 * Parses a date string and returns the day and month.
 * @param {string} dateString - Date string.
 * @return {Object} Object containing day and month.
 */
export const parseDateString = ( dateString ) => {
	const date = new Date( dateString );

	if ( isNaN( date.getTime() ) ) {
		return null;
	}
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const day = date.getDate();
	const month = monthNames[ date.getMonth() ];

	return { day, month };
};
