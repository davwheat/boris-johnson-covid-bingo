const workboxConfig = {
  runtimeCaching: [
    {
      // Use cacheFirst since these don't need to be revalidated (same RegExp
      // and same reason as above)
      urlPattern: /(\.js$|\.css$|static\/)/,
      handler: `CacheFirst`,
    },
    {
      // page-data.json files are not content hashed
      urlPattern: /^https?:.*\page-data\/.*\/page-data\.json/,
      handler: `NetworkFirst`,
    },
    {
      // AdSense
      urlPattern: /^https:\/\/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js$/,
      handler: `NetworkOnly`,
    },
    {
      // Add runtime caching of various other page resources
      urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
      handler: `StaleWhileRevalidate`,
    },
  ],
  // Set skipWaiting to false. That's the only change in config.
  skipWaiting: false,
  clientsClaim: true,
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://borisbingo.com`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-less`,
    `gatsby-plugin-htaccess`,
    `gatsby-plugin-react-head`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'DD MMMM YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BoJo Briefing Bingo`,
        short_name: `BoJo Bingo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/boris-weird/1.png`,
      },
    },
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
        cookieHubId: '4ab9b9d7',
        cookieHubV2Api: true,
        categories: [
          {
            categoryName: 'analytics', // Unique id of the category which is set by Cookiehub.
            cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled', // Your custom cookie name
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: 'UA-20362245-8',
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-webpack-size`,
    // {
    //   resolve: `gatsby-plugin-minify-classnames`,
    //   options: {
    //     dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
    //     enableOnDevelopment: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: require.resolve(`./src/sw.js`),
        workboxConfig,
      },
    },
  ],
}
