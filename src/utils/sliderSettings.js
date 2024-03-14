import { Icon } from '@wordpress/components';

function SampleNextArrow(props) {
  const { onClick } = props;
  return ( <Icon icon="arrow-right-alt2" onClick={onClick} className="slider-arrow__next" /> );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return ( <Icon icon="arrow-left-alt2" onClick={onClick} className="slider-arrow__prev" /> );
}

export const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: true,
  pauseOnHover: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

export const sliderSettingsWithArrows = {
  ...sliderSettings,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
