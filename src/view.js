import sliderSettings from './utils/sliderSettings'

document.addEventListener("DOMContentLoaded", function() {
  var slider = document.querySelector(".slick-slider");
  
  if (slider && window.jQuery && window.jQuery.fn.slick) {
    var slickOptions = sliderSettings;
    window.jQuery(slider).slick(slickOptions);
  }
});
