module.exports = {
  siteMetadata: {
    siteUrl: `https://borisbingo.com`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-less`,
    `gatsby-plugin-react-head`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: 'always',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: '@slixites/gatsby-plugin-google-fonts',
      options: {
        fonts: [`jost\:400,400i,500,700,700i`],
        display: 'fallback',
        preconnect: true,
        attributes: {
          rel: 'stylesheet preload prefetch',
          as: 'style',
        },
      },
    },
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
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-sitemap`,
  ],
}
