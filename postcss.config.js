module.exports = {
    plugins: [
      require('cssnano')(),
      require('@fullhuman/postcss-purgecss')({
        content: ['./index.html', './src/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    ],
  };
  