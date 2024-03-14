import { sliderSettings } from './utils/sliderSettings'

const sliderSettingsWithArrows = {
  ...sliderSettings,
  nextArrow: '<span class="dashicons dashicons-arrow-right-alt2 slider-arrow__next"></span>',
  prevArrow: '<span class="dashicons dashicons-arrow-left-alt2 slider-arrow__prev"></span>',
};

jQuery(document).ready(function(jQuery) {
  jQuery(".slick-slider").slick(sliderSettingsWithArrows);
});
