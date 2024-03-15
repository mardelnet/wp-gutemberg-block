import { sliderSettings } from './utils/sliderSettings';

/**
 * Slider settings with custom arrow elements.
 * @type {Object}
 */
const sliderSettingsWithArrows = {
  ...sliderSettings,
  nextArrow: '<span class="dashicons dashicons-arrow-right-alt2 slider-arrow__next"></span>',
  prevArrow: '<span class="dashicons dashicons-arrow-left-alt2 slider-arrow__prev"></span>',
};

/**
 * Initialize slick slider with custom settings.
 */
jQuery(document).ready(function(jQuery) {
  jQuery(".slick-slider").slick(sliderSettingsWithArrows);
});
