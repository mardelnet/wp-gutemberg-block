import { useBlockProps } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

const Save = ({ attributes }) => {
    const blockProps = useBlockProps.save();

    return (
        <div { ...blockProps }>
          <div className="header">
              <div>
                <h2>Notas de Prensa</h2>
              </div>
              <div>
                <Icon icon="arrow-left-alt2" onClick={() => slider?.current?.slickPrev()} />
                <Icon icon="arrow-right-alt2" onClick={() => slider?.current?.slickNext()} />
              </div>
            </div>
            <div className="slider">
                <div className="slick-slider">
                    {attributes.pressNotes.map((slide, index) => (
                        <div key={index} className="single-press-note">
                            <Icon  className="single-press-note__icon" icon={slide?.selectedOption ?? 'admin-site'} />
                            <div className='main-image'>
                              <img src={slide?.imageUrl ?? ''} alt={slide.title} />
                            </div>
                            {slide?.day && slide?.month && (
                              <div className="single-press-note__date">
                                <div>
                                  <div className="single-press-note__date--day">{slide.day}</div>
                                  <div className="single-press-note__date--month">{slide.month}</div>
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
    );
};

export default Save;
