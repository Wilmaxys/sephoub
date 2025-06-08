<?php

use SeaPicture\AutoLoader;
use SeaPicture\View;

/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */

function my_js_var_stylesheet_directory()
{
    echo '<script type="text/javascript">';
    echo 'var stylesheetDir = "' . get_bloginfo('stylesheet_directory') . '"';
    echo '</script>';
}

require get_stylesheet_directory() . '/app/AutoLoader.php';
$loader = new AutoLoader();
$loader->register();
$loader->addNamespace('SeaPicture', get_stylesheet_directory() . '/app');

View::$view_dir = get_stylesheet_directory() . '/templates/views';

require get_stylesheet_directory() . '/includes/scripts-and-styles.php';
require get_stylesheet_directory() . '/app/removeUnnecessaryMenu.php';
require get_stylesheet_directory() . '/app/addTemplates.php';
add_action('wp_head', 'my_js_var_stylesheet_directory', 9);

// 1. Register the Custom Post Type for Submissions
function create_form_submission_post_type() {
    register_post_type('form_submission', [
        'labels' => [
            'name' => 'Gérer les demandes de contacts',
            'singular_name' => 'Gérer les demandes de contacts',
        ],
        'public' => false,
        'has_archive' => false,
        'show_ui' => true,
        'supports' => ['title', 'custom-fields'],
    ]);
}
add_action('init', 'create_form_submission_post_type');

function save_form_data() {
    error_log('Demande de contacts reçues: ' . print_r($_POST, true));

    if (!isset($_POST['action']) || $_POST['action'] !== 'save_form_data') {
        wp_send_json_error(['message' => 'Invalid action.']);
    }

    $first_name = sanitize_text_field($_POST['grid-first-name'] ?? '');
    $last_name = sanitize_text_field($_POST['grid-last-name'] ?? '');
    $email = sanitize_email($_POST['grid-email'] ?? '');
    $message = sanitize_textarea_field($_POST['grid-message'] ?? '');

    if (!$first_name || !$last_name || !$email || !$message) {
        wp_send_json_error(['message' => 'All fields are required.']);
    }

    $post_id = wp_insert_post([
        'post_type' => 'form_submission',
        'post_title' => $first_name . ' ' . $last_name,
        'post_status' => 'publish',
        'meta_input' => [
            'first_name' => $first_name,
            'last_name' => $last_name,
            'email' => $email,
            'message' => $message,
        ],
    ]);

    if ($post_id) {
        error_log("Form Submission Created with ID: $post_id");
        wp_send_json_success(['message' => 'Thank you for your message!']);
    } else {
        error_log('Failed to create form submission.');
        wp_send_json_error(['message' => 'Failed to save the submission.']);
    }
}

add_action('wp_ajax_save_form_data', 'save_form_data');
add_action('wp_ajax_nopriv_save_form_data', 'save_form_data');

// 3. Register Custom Admin Page
function register_form_submissions_menu() {
    add_menu_page(
        'Liste de demandes de contacts',
        'Liste de demandes de contacts',
        'manage_options',
        'form-submissions',
        'display_form_submissions',
        'dashicons-list-view',
        20
    );
}
add_action('admin_menu', 'register_form_submissions_menu');

// 4. Display Submissions in a Table
function display_form_submissions() {
    $submissions = get_posts([
        'post_type' => 'form_submission',
        'posts_per_page' => -1,
    ]);

    echo '<div class="wrap">';
    echo '<h1>Demandes de contacts</h1>';

    if (empty($submissions)) {
        echo '<p>No submissions found.</p>';
        return;
    }

    echo '<table class="widefat fixed" cellspacing="0">';
    echo '<thead>';
    echo '<tr>';
    echo '<th>ID</th>';
    echo '<th>Prénom</th>';
    echo '<th>Nom</th>';
    echo '<th>Email</th>';
    echo '<th>Message</th>';
    echo '<th>Date</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    foreach ($submissions as $submission) {
        $first_name = get_post_meta($submission->ID, 'first_name', true);
        $last_name = get_post_meta($submission->ID, 'last_name', true);
        $email = get_post_meta($submission->ID, 'email', true);
        $message = get_post_meta($submission->ID, 'message', true);
        $date = get_the_date('Y-m-d H:i:s', $submission->ID);

        echo '<tr>';
        echo '<td>' . esc_html($submission->ID) . '</td>';
        echo '<td>' . esc_html($first_name) . '</td>';
        echo '<td>' . esc_html($last_name) . '</td>';
        echo '<td>' . esc_html($email) . '</td>';
        echo '<td>' . esc_html($message) . '</td>';
        echo '<td>' . esc_html($date) . '</td>';
        echo '</tr>';
    }

    echo '</tbody>';
    echo '</table>';
    echo '</div>';
}

