module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{json,html,js,css,txt}'],
  swDest: 'build/service-worker.js',
  skipWaiting: true,
  runtimeCaching: [
    {
      // Match any request that ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|mp3)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 10,
        },
      },
    },
  ],
};
