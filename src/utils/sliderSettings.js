import { Icon } from '@wordpress/components';

/**
 * Functional component for rendering the next arrow in a slider.
 * @param {Object}   props         - Props for the SampleNextArrow component.
 * @param {Function} props.onClick - Function to handle click event.
 * @return {JSX.Element} Next arrow component.
 */
function SampleNextArrow( props ) {
	const { onClick } = props;
	return (
		<Icon
			icon="arrow-right-alt2"
			onClick={ onClick }
			className="slider-arrow__next"
		/>
	);
}

/**
 * Functional component for rendering the previous arrow in a slider.
 * @param {Object}   props         - Props for the SamplePrevArrow component.
 * @param {Function} props.onClick - Function to handle click event.
 * @return {JSX.Element} Previous arrow component.
 */
function SamplePrevArrow( props ) {
	const { onClick } = props;
	return (
		<Icon
			icon="arrow-left-alt2"
			onClick={ onClick }
			className="slider-arrow__prev"
		/>
	);
}

/**
 * Default settings for the slider.
 * @type {Object}
 */
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
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

/**
 * Slider settings with custom arrow components.
 * @type {Object}
 */
export const sliderSettingsWithArrows = {
	...sliderSettings,
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
};
