<?php

get_header();

//Get the images ids from the post_metadata
$images = acf_photo_gallery('galerie', $post->ID);

//Check if return array has anything in it
if (count($images)):
    //Cool, we got some data so now let's loop over it
    ?>

    <div class="image-flex container mx-auto px-4 py-8">
        <a href="/" class="flex items-center text-white pb-6 font-bold">
            <svg class="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 19l-7-7 7-7"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 12h16"></path>
            </svg>
            Back to Home
        </a>
        <div class="flex flex-row flex-wrap">
            <?php foreach ($images as $image): ?>
                <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 image-wrapper">
                    <img src="<?php echo $image["full_image_url"]; ?>" alt="Image"
                        class="rounded-lg shadow-md object-cover w-full h-full cursor-pointer" />
                </div>
            <?php endforeach; ?>
        </div>

    </div>

    <div class="modal hidden fixed inset-0 bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center p-10">
        <span class="close absolute top-0 right-0 p-4 text-white text-4xl cursor-pointer">&times;</span>
        <img class="modal-content shadow-md block mx-auto max-w-3xl max-h-full w-auto">
    </div>
<?php endif;

get_footer();
?>