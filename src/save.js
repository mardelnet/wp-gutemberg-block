import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';
import { parseDateString } from './utils/pressNoteFunctions';

const Save = ({ attributes }) => {
    const blockProps = useBlockProps.save();
    const featuredIndex = attributes?.featuredPressNote;
    const featuredPressNote = attributes?.pressNotes[featuredIndex]

    return (
        <div { ...blockProps }>
          <div className="header">
            <h2>Notas de Prensa</h2>
          </div>

          <div className="slider-container">
            {featuredPressNote && (
              <div className="slider-container__featured">
                <div className="single-press-note">
                  <Icon  className="single-press-note__icon" icon={featuredPressNote?.selectedOption ?? 'admin-site'} />
                  <div className='main-image'>
                    {featuredPressNote?.imageUrl && ( <img src={featuredPressNote.imageUrl} alt={featuredPressNote.title ?? 'press note image'} /> ) }
                  </div>
                  {featuredPressNote?.date && (
                    <div className="single-press-note__date">
                      <div>
                        <div className="single-press-note__date--day">
                          {parseDateString(featuredPressNote.date).day}
                        </div>
                        <div className="single-press-note__date--month">
                          {parseDateString(featuredPressNote.date).month}
                        </div>
                      </div>
                    </div>
                  )}
                  {featuredPressNote?.title && (
                    <h3 className="single-press-note__title">{featuredPressNote.title}</h3>
                  )}
                  {featuredPressNote?.content && (
                    <p className="single-press-note__content">{featuredPressNote.content}</p>
                  )}
                </div>
              </div>
            )}
            <div className="slider-container__slides">
              <div className="slider">
                <div className="slick-slider">
                    {attributes.pressNotes.map((slide, index) => (
                      <div key={index} className="single-press-note">
                          <Icon  className="single-press-note__icon" icon={slide?.selectedOption ?? 'admin-site'} />
                          <div className='main-image'>
                            {slide?.imageUrl && ( <img src={slide.imageUrl} alt={slide.title ?? 'press note image'} /> ) }
                          </div>
                          {slide?.date && (
                            <div className="single-press-note__date">
                              <div>
                                <div className="single-press-note__date--day">
                                  {parseDateString(slide.date).day}
                                </div>
                                <div className="single-press-note__date--month">
                                  {parseDateString(slide.date).month}
                                </div>
                              </div>
                            </div>
                          )}
                          {slide?.title && (
                            <h3 className="single-press-note__title">{slide.title}</h3>
                          )}
                          {slide?.content && (
                            <p className="single-press-note__content">{slide.content}</p>
                          )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Save;
