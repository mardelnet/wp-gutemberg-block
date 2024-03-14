<?php
/**
 * Plugin Name:       Press Notes Block
 * Description:       The Press Notes Gutemberg Block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Pedro Figueroa
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       press-notes
 *
 * @package           press-notes
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function press_notes_press_notes_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'press_notes_press_notes_block_init' );

/**
 * Allows the use of dashicons.
 *
 * @see https://github.com/WordPress/gutenberg/issues/53528
 */
add_action('enqueue_block_assets', function (): void {
  wp_enqueue_style('dashicons');
});

function enqueue_react_slick() {
  // Enqueue react-slick script
  wp_enqueue_script(
      'react-slick',
      'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
      array('jquery'), // Dependencies (if any)
      '0.28.0', // Version
      true // Load in footer
  );

  // Optionally enqueue slick CSS
  wp_enqueue_style(
      'slick-css',
      'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
      array(), // Dependencies (if any)
      '1.8.1' // Version
  );
}
add_action('wp_enqueue_scripts', 'enqueue_react_slick');
