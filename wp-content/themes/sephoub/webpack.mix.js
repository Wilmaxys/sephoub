const mix = require("laravel-mix");
const local = require("./assets/js/utils/local-config");
require("laravel-mix-versionhash");
require("laravel-mix-tailwind");

mix.setPublicPath("./public");

mix.webpackConfig({
  externals: {
    jquery: "jQuery",
  },
});

if (local.proxy) {
  mix.browserSync({
    proxy: local.proxy,
    injectChanges: true,
    open: false,
    files: ["public/**/*.{css,js}", "templates/**/*.php"],
  });
}

mix.tailwind();
mix.js("assets/js/app.js", "js");
mix.sass("assets/scss/app.scss", "css").options({
  processCssUrls: false,
});
mix.copy("./assets/img", "public/img");

if (mix.inProduction()) {
  mix.versionHash();
  mix.sourceMaps();
}
