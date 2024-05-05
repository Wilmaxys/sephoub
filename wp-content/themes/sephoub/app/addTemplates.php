<?php
function load_templates_from_custom_folder($template)
{
    $post_type = get_post_type();

    $custom_post_types = array('photoshoot', );

    if (in_array($post_type, $custom_post_types)) {
        // Check for different template types
        if (is_single() && file_exists(get_stylesheet_directory() . "/templates/single-{$post_type}.php")) {
            $template = get_stylesheet_directory() . "/templates/single-{$post_type}.php";
        } elseif (is_archive() && file_exists(get_stylesheet_directory() . "/templates/archive-{$post_type}.php")) {
            $template = get_stylesheet_directory() . "/templates/archive-{$post_type}.php";
        }
        // Add other template checks as needed
    }

    return $template;
}
add_filter('template_include', 'load_templates_from_custom_folder');