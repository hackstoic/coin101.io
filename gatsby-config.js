/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Coin101 - Cryptocurrency Education`,
    description: `Learn about cryptocurrency, blockchain technology, and digital assets through comprehensive guides and tutorials.`,
    author: `@coin101`,
    siteUrl: `https://coin101.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },

     {
       resolve: `gatsby-plugin-mdx`,
       options: {
         extensions: [`.mdx`, `.md`],
         gatsbyRemarkPlugins: [],
       },
     },
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
    {
       resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Coin101 - Cryptocurrency Education`,
          short_name: `Coin101`,
          start_url: `/`,
          background_color: `#1a202c`,
          theme_color: `#3182ce`,
          display: `minimal-ui`,
          icon: `src/images/icon.svg`,
        },
     },
  ],
}
