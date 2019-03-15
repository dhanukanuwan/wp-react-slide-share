<?php
/**
 * Achieve functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Achieve
 */

if ( ! function_exists( 'meyer_setup' ) ) :

	function meyer_setup() {

		load_theme_textdomain( 'meyer', get_template_directory() . '/languages' );

		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'title-tag' );

		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary' => esc_html__( 'Primary', 'meyer' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'meyer_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		add_image_size( 'slide_thumb', 420, 280, ['right', 'top'] );

	}
endif;
add_action( 'after_setup_theme', 'meyer_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function meyer_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'meyer_content_width', 640 );
}
add_action( 'after_setup_theme', 'meyer_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function meyer_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'meyer' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'meyer' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'meyer_widgets_init' );

function meyer_themes_scripts() {
	wp_enqueue_style( 'meyer-fontawesome', get_stylesheet_directory_uri() . '/css/font-awesome.min.css' );
	wp_enqueue_style( 'meyer-g-font', 'https://fonts.googleapis.com/css?family=Montserrat:400,500,700' );
	wp_enqueue_style( 'meyer-animate-css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css' );
}
add_action( 'wp_enqueue_scripts', 'meyer_themes_scripts' );

add_filter('show_admin_bar', '__return_false');

function trigger_lookbook_share() {

	$share_email = null;

	if ( isset( $_POST['share_email'] ) ) {
		$share_email = sanitize_email( $_POST['share_email'] );
	}

	if ( ! empty ( $share_email ) ) {

		$headers[] = 'From: Meyer <noreply@meyer.net>';
		$headers[] = 'Content-Type: text/html; charset=UTF-8';

		wp_mail( $share_email, 'Meyer LookBook Share', get_home_url(), $headers );

	}

	wp_die();
}

add_action( 'wp_ajax_trigger_lookbook_share', 'trigger_lookbook_share' );
add_action( 'wp_ajax_nopriv_trigger_lookbook_share', 'trigger_lookbook_share' );

function copy_images_to_slides() {

	$images_loop = new WP_Query( ['post_type' => 'attachment', 'posts_per_page' => -1, 'post_status' => 'inherit', 'post_mime_type' => 'image'] );

	if( $images_loop->have_posts() ) : while( $images_loop->have_posts() ) : $images_loop->the_post();

	$slide_title = get_page_by_title( get_the_title(), OBJECT, 'slides' );

	if ( empty( $slide_title ) ) {
		$new_slide_id = wp_insert_post( [
			'post_title'	=> get_the_title(),
			'post_content'	=> '',
			'post_status'   => 'publish',
			'post_type'	=> 'slides'
		] );

		set_post_thumbnail( $new_slide_id, get_the_ID() );
	}

	endwhile; wp_reset_postdata(); endif;

}

//add_action( 'init', 'copy_images_to_slides' );

add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('slides'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );

		register_rest_field( array('slides'),
        'thumb_url',
        array(
            'get_callback'    => 'get_rest_featured_thumb_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {

	$return_url = null;

	if ( wp_is_mobile() ) {
		$mobile_img = get_field( 'mobile_image', $object['id'] );

		if ( ! empty( $mobile_img ) ) {
			$return_url = $mobile_img;
		}

	}

    if( isset( $object['featured_media'] ) && empty( $return_url ) ) {
        $img = wp_get_attachment_image_src( $object['featured_media'], 'original' );
				$return_url = $img[0];
    }

    return $return_url;
}

function get_rest_featured_thumb_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'slide_thumb' );
        return $img[0];
    }
    return false;
}


?>
