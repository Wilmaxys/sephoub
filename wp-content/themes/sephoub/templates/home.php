<div class="relative w-full h-screen">
  <!-- Fullscreen placeholder image -->
  <div class="bg-gray-300 home-background w-full h-full"></div>

  <!-- Text box in the bottom left corner -->
  <div class="absolute bottom-0 left-0 p-4 m-4 name-container">
    <h1 class="text-4xl font-bold">Graou Graou</h1>
    <p class="text-lg">Photographer</p>
  </div>
</div>

<div class="container mx-auto px-4 py-8 sm:min-h-0 text-gray-300">
  <h2 class="text-2xl font-bold mb-6">Projects</h2>
  <div class="flex flex-col sm:flex-row sm:-mx-2">
    <?php
    $posts = get_posts(
      array(
        'posts_per_page' => 4,
        'post_type' => 'project'
      )
    );

    $index = 0;
    if ($posts):
      foreach ($posts as $post):
        if ($index == 0): ?>
          <div class="card relative w-full sm:h-64 h-32 sm:w-2/5 mb-3 overflow-hidden rounded-lg sm:mx-2 sm:cursor-pointer">
            <img src="<?php the_field('couverture'); ?>" alt="Sports" class="object-cover rounded-lg h-full w-full">
            <div class="background-fade"></div>
            <div class="absolute bottom-0 left-0 p-2 w-3/4 sm:w-full flex flex-col items-start">
              <h3 class="title font-bold  text-xl"><?php the_title(); ?></h3>
              <p class="desc text-xs text-justify w-full h-16 text-ellipsis overflow-hidden py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat luctus leo ac ullamcorper. F
                u sce nec vehicula turpis, auctor tincidunt nunc. Suspendisse semper arcu non vulputate semper. Integer
                fringilla nunc a nisl faucibus ultricies. Mauris egestas auctor nunc et laoreet.
              </p>
            </div>
            <div class="plus-button absolute bottom-0 right-0 p-2 w-1/4 flex justify-end overflow-hidden sm:hidden">
              <h3 class="bg-gray-700 rounded-lg text-sm w-full text-center sm:cursor-default cursor-pointer">Plus</h3>
            </div>
          </div>
        <?php else: ?>
          <div class="card relative w-full sm:h-64 h-32 sm:w-1/5 mb-3 overflow-hidden rounded-lg sm:mx-2 sm:cursor-pointer">
            <img src="<?php the_field('couverture'); ?>" alt="Sports" class="object-cover rounded-lg h-full w-full">
            <div class="background-fade"></div>
            <div class="absolute bottom-0 left-0 p-2 w-3/4 sm:w-full flex flex-col items-start">
              <h3 class="title font-bold  text-xl"><?php the_title(); ?></h3>
              <p class="desc text-xs text-justify w-full h-16 text-ellipsis overflow-hidden py-2 sm:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat luctus leo ac ullamcorper. F
                u sce nec vehicula turpis, auctor tincidunt nunc. Suspendisse semper arcu non vulputate semper. Integer
                fringilla nunc a nisl faucibus ultricies. Mauris egestas auctor nunc et laoreet.
              </p>
            </div>
            <div class="plus-button absolute bottom-0 right-0 p-2 w-1/4 flex justify-end overflow-hidden sm:hidden">
              <h3 class="bg-gray-700 rounded-lg text-sm w-full text-center sm:cursor-default cursor-pointer">Plus</h3>
            </div>
          </div>
          <?php
        endif;
        $index++;
      endforeach;
      wp_reset_postdata(); ?>
    <?php endif; ?>
  </div>
</div>


<?php
$projects = get_posts(
  array(
    'posts_per_page' => -1,
    'post_type' => 'project'
  )
);

if ($projects): ?>
  <?php foreach ($projects as $key => $value): ?>
    <?php if ($key <= 5): ?>
      <?php if ($key >= 1): ?>

        <!-- <a href="<?php the_permalink(); ?>" class="h-full w-full absolute"></a> -->
      <?php else: ?>

      <?php endif; ?>
    <?php endif; ?>
  <?php endforeach; ?>
<?php endif; ?>


<div class="text-gray-300 about-block container mx-auto px-4 py-8">
  <h2 class="text-2xl font-bold mb-6">A propos</h2>
  <div class="grid">
    <div class="col-start-1 sm:col-end-2 col-end-3">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Estelle.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full">
    </div>

    <div class="sm:col-start-2 col-start-3 col-end-5 sm:col-end-3 sm:row-start-1 sm:row-end-3">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/back.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full">
    </div>

    <div class="col-start-1 col-end-3 sm:col-start-3 sm:col-end-5">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Elo.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full">
    </div>

    <div class="sm:col-start-1 col-start-3 col-end-5 sm:col-end-2 row-start-2 row-end-3 sm:row-end-4">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Ron.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full">
    </div>

    <div class="col-start-3 col-end-4 hidden sm:block">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Norig.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full">
    </div>

    <div class="col-start-4 col-end-5 hidden sm:block">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Louise.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full">
    </div>

    <div class="rounded-lg bg-gray-900 shadow-m relative sm:col-start-2 col-start-1 col-end-5 overflow-hidden ">
      <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Course.png" alt="Description"
        class="rounded-lg shadow-md object-cover h-full w-full filter blur-md opacity-50">
      <div class="text-sm p-2 absolute top-0 bottom-0 left-0 right-0">
        <div class="text-lg font-bold">Test</div>
        <div class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat luctus leo ac
          ullamcorper. Fusce nec vehicula turpis, auctor tincidunt nunc. Suspendisse semper arcu non vulputate semper.
          Integer fringilla nunc a nisl faucibus ultricies. Mauris egestas auctor nunc et laoreet. Vivamus aliquet
          viverra quam, a ornare ante pulvinar a. Mauris cursus ut purus sed convallis. Nulla sit amet nibh magna.
          Mauris dignissim lorem magna.</div>
      </div>
    </div>
  </div>


</div>

<!-- <div class="about-back">
  <div class="about-block container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold mb-6">About me</h2>
    <div class="equal-height-rows">

      <div class="col-span-1">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Estelle.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full">
      </div>

      <div class="col-span-1 row-span-2">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/back.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full">
      </div>

      <div class="col-span-2">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Elo.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full">
      </div>

      <div class="col-span-1 row-span-2">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Ron.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full">
      </div>

      <div class="col-span-1">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Norig.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full">
      </div>

      <div class="col-span-1">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Louise.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full">
      </div>

      <div class="rounded-lg shadow-md container-blur col-span-3">
        <img src="<?php bloginfo('stylesheet_directory') ?>/public/img/Course.png" alt="Description"
          class="rounded-lg shadow-md object-cover h-full w-full opacity-50">
        <div class="object-cover h-full w-full content-blur text-sm px-1">
          <div class="text-lg font-bold">Test</div>
          <div class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam volutpat luctus leo ac ullamcorper. Fusce nec vehicula turpis, auctor tincidunt nunc.
            Suspendisse
            semper arcu non vulputate semper. Integer fringilla nunc a nisl faucibus ultricies. Mauris egestas auctor
            nunc
            et laoreet. Vivamus aliquet viverra quam, a ornare ante pulvinar a. Mauris cursus ut purus sed convallis.
            Nulla sit amet nibh magna. Mauris dignissim lorem magna.</div>
        </div>
      </div>
    </div>
  </div>
</div> -->

<div class="py-8">
  <h2 class="text-2xl font-bold mb-2 px-4 container mx-auto text-gray-300">Photoshoots</h2>
  <div class="slider-container px-4">
    <div class="slider-global container mx-auto">
      <div class="slider-wrapper">
        <div class="slider" style="transition: left 0.6s ease 0s; left: 0px;">
          <?php
          $posts = get_posts(
            array(
              'posts_per_page' => -1,
              'post_type' => 'photoshoot'
            )
          );

          if ($posts): ?>
            <?php foreach ($posts as $post): ?>
              <div class="element-wrap w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div class="element relative m-1 hover:m-0">
                  <img src="<?php the_field('couverture'); ?>" class="object-cover rounded-lg h-full w-full absolute">
                  <div class="rounded-lg background-fade"></div>
                  <div class="title absolute flex-col flex items-center justify-end w-full h-full pb-2 text-gray-300 ">
                    <span class="text-xl">
                      <?php the_field('date'); ?>
                    </span>
                    <span class="text-md">
                      <?php the_title(); ?>
                    </span>
                  </div>
                  <a href="<?php the_permalink(); ?>" class="h-full w-full absolute"></a>
                </div>
              </div>
            <?php endforeach; ?>
            <?php wp_reset_postdata(); ?>
          <?php endif; ?>
        </div>
      </div>
      <div class="absolute top-0 bottom-0 left-0 flex items-center">
        <div class="a-left arrow rounded-lg py-4 px-4 cursor-pointer text-xl font-extrabold">&#60;</div>
      </div>
      <div class="absolute top-0 bottom-0 right-0 flex items-center">
        <div class="a-right arrow rounded-lg py-4 px-4 cursor-pointer text-xl font-extrabold">&#62;</div>
      </div>
    </div>
  </div>
</div>