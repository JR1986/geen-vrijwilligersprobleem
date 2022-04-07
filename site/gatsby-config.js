module.exports = {
  siteMetadata: {
    author: 'Jelmer Knossen',
    siteUrl: 'https://geenvrijwilligersprobleem.nl',
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '228a5af0d13392cf62bc951d69030c',
        preview: false,
        disableLiveReload: false,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/logo-geen-vrijwilligers-probleem.svg',
      },
    },
  ],
};
