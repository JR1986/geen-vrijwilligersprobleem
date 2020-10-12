module.exports = {
  siteMetadata: {
    author: `Jelmer Knossen`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        devMode: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `228a5af0d13392cf62bc951d69030c`,
        preview: false,
        disableLiveReload: false,
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
