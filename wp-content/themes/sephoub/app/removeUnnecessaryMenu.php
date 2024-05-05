<?php

function disable_post_page_editor()
{
    global $pagenow;
    if (($pagenow == 'post-new.php' || $pagenow == 'post.php') && (get_post_type() == 'post' || get_post_type() == 'page')) {
        wp_die('Posts and Pages are disabled.');
    }
}
function remove_menus()
{
    remove_menu_page('edit.php'); // Posts
    remove_menu_page('edit.php?post_type=page'); // Pages
}

function redirect_post_page_templates() {
    // Example condition: Redirect if it's a specific page or post
    if (is_page('page') || is_single('post')) {
        wp_redirect(home_url());
        exit;
    }
}

// Disable support for comments and trackbacks in post types
function disable_comments_post_types_support() {
    $post_types = get_post_types();
    foreach ($post_types as $post_type) {
        if(post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
}

// Close comments on the front-end
function disable_comments_status() {
    return false;
}

// Hide existing comments
function disable_comments_hide_existing_comments($comments) {
    $comments = array();
    return $comments;
}

// Remove comments page in menu
function disable_comments_admin_menu() {
    remove_menu_page('edit-comments.php');
}

// Redirect any user trying to access comments page
function disable_comments_admin_menu_redirect() {
    global $pagenow;
    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url()); exit;
    }
}

// Remove comments metabox from dashboard
function disable_comments_dashboard() {
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
}

// Remove comments links from admin bar
function disable_comments_admin_bar() {
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
}

add_action('template_redirect', 'redirect_post_page_templates');
add_action('admin_menu', 'remove_menus');
add_action('admin_init', 'disable_post_page_editor');
add_action('admin_init', 'disable_comments_post_types_support');
add_filter('comments_open', 'disable_comments_status', 20, 2);
add_filter('pings_open', 'disable_comments_status', 20, 2);
add_filter('comments_array', 'disable_comments_hide_existing_comments', 10, 2);
add_action('admin_menu', 'disable_comments_admin_menu');
add_action('admin_init', 'disable_comments_admin_menu_redirect');
add_action('admin_init', 'disable_comments_dashboard');
add_action('init', 'disable_comments_admin_bar');