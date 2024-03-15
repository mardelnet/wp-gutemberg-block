export const onChangeTitle = (pressNotes, setPressNotes, setAttributes, newTitle, index) => {
    const updatedPressNotes = [...pressNotes];
    updatedPressNotes[index] = { ...updatedPressNotes[index], title: newTitle };
    setPressNotes(updatedPressNotes);
    setAttributes({ pressNotes: updatedPressNotes });
};

export const onChangeContent = (pressNotes, setPressNotes, setAttributes, newContent, index) => {
    const updatedPressNotes = [...pressNotes];
    updatedPressNotes[index] = { ...updatedPressNotes[index], content: newContent };
    setPressNotes(updatedPressNotes);
    setAttributes({ pressNotes: updatedPressNotes });
};

export const handleDateChange = (pressNotes, setPressNotes, setAttributes, date, index, setIsDatePickerVisible) => {
  const updatedPressNotes = [...pressNotes];
  updatedPressNotes[index] = { ...updatedPressNotes[index], date: date };
  setPressNotes(updatedPressNotes);
  setIsDatePickerVisible(false);
  setAttributes({ pressNotes: updatedPressNotes });
};

export const handleTypeChange = (pressNotes, setPressNotes, setAttributes, newOption, index, setIsTypePickerVisible) => {
    const updatedPressNotes = [...pressNotes];
    updatedPressNotes[index] = { ...updatedPressNotes[index], selectedOption: newOption };
    setPressNotes(updatedPressNotes);
    setIsTypePickerVisible(false);
    setAttributes({ pressNotes: updatedPressNotes });
};

export const setImageAttributes = (pressNotes, setPressNotes, setAttributes, media, index) => {
    const updatedPressNotes = [...pressNotes];
    if (!media || !media.url) {
        updatedPressNotes[index] = { ...updatedPressNotes[index], imageUrl: null, imageId: null, imageAlt: null };
    } else {
        updatedPressNotes[index] = { ...updatedPressNotes[index], imageUrl: media.url, imageId: media.id, imageAlt: media.alt };
    }
    setPressNotes(updatedPressNotes);
    setAttributes({ pressNotes: updatedPressNotes });
};

export const addPressNote = (pressNotes, setPressNotes, setAttributes) => {
    const newPressNote = { title: '', content: '', imageUrl: '', imageId: '', imageAlt: '' };
    setPressNotes([...pressNotes, newPressNote]);
    setAttributes({ pressNotes: [...pressNotes, newPressNote] });
};

export const removePressNote = (pressNotes, setPressNotes, setAttributes, index) => {
    const updatedPressNotes = [...pressNotes];
    updatedPressNotes.splice(index, 1);
    setPressNotes(updatedPressNotes);
    setAttributes({ pressNotes: updatedPressNotes });
};

export const addFeaturedPressNote = (setFeaturedIndex, setAttributes, index) => {
  setFeaturedIndex(index);
  setAttributes({ featuredPressNote: index });
};

export const removeFeaturedPressNote = (setFeaturedIndex, setAttributes) => {
  setFeaturedIndex(null);
  setAttributes({ featuredPressNote: null });
};

export const parseDateString = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return null;
  }
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];

  return { day, month };
}
