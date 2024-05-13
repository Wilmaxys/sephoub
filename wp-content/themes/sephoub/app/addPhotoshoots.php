<?php
add_action( 'acf/include_fields', function() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group( array(
	'key' => 'group_658f118c8a61c',
	'title' => 'Photoshoots',
	'fields' => array(
		array(
			'key' => 'field_65a93481b5862',
			'label' => 'Date',
			'name' => 'date',
			'aria-label' => '',
			'type' => 'date_picker',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'display_format' => 'd/m/Y',
			'return_format' => 'd/m/Y',
			'first_day' => 1,
		),
		array(
			'key' => 'field_658f11b86d83d',
			'label' => 'Couverture',
			'name' => 'couverture',
			'aria-label' => '',
			'type' => 'image',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'url',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'preview_size' => 'medium',
		),
		array(
			'key' => 'field_658f1b7182c6e',
			'label' => 'Galerie',
			'name' => 'galerie',
			'aria-label' => '',
			'type' => 'photo_gallery',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'fields[test3' => array(
				'edit_modal' => 'Default',
				'images_limit' => '',
				'remove_edit_button' => 'No',
				'remove_delete_button' => 'No',
			),
			'edit_modal' => 'Default',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'post',
			),
		),
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'post',
			),
		),
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'photoshoot',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
	'show_in_rest' => 0,
) );
} );

add_action( 'init', function() {
	register_post_type( 'photoshoot', array(
	'labels' => array(
		'name' => 'Photoshoots',
		'singular_name' => 'photoshoot',
		'menu_name' => 'Photoshoots',
		'all_items' => 'All Photoshoots',
		'edit_item' => 'Edit photoshoots',
		'view_item' => 'View photoshoots',
		'view_items' => 'View Photoshoots',
		'add_new_item' => 'Add New photoshoots',
		'add_new' => 'Add New photoshoots',
		'new_item' => 'New photoshoots',
		'parent_item_colon' => 'Parent photoshoots:',
		'search_items' => 'Search Photoshoots',
		'not_found' => 'No photoshoots found',
		'not_found_in_trash' => 'No photoshoots found in Trash',
		'archives' => 'photoshoots Archives',
		'attributes' => 'photoshoots Attributes',
		'insert_into_item' => 'Insert into photoshoots',
		'uploaded_to_this_item' => 'Uploaded to this photoshoots',
		'filter_items_list' => 'Filter photoshoots list',
		'filter_by_date' => 'Filter photoshoots by date',
		'items_list_navigation' => 'Photoshoots list navigation',
		'items_list' => 'Photoshoots list',
		'item_published' => 'photoshoots published.',
		'item_published_privately' => 'photoshoots published privately.',
		'item_reverted_to_draft' => 'photoshoots reverted to draft.',
		'item_scheduled' => 'photoshoots scheduled.',
		'item_updated' => 'photoshoots updated.',
		'item_link' => 'photoshoots Link',
		'item_link_description' => 'A link to a photoshoots.',
	),
	'public' => true,
	'show_in_rest' => true,
	'supports' => array(
		0 => 'title',
	),
	'delete_with_user' => false,
) );
} );