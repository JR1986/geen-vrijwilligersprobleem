require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Geen vrijwilligersprobleem`,
    siteUrl: `https://geenvrijwilligersprobleem.nl`,
    author: 'Jelmer Knossen'
  },
  plugins: [
  {
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": process.env.DATOCMS
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      footnotes: true,
      gfm: true,
      plugins: [],
    },
  },
  "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./static/"
    },
    __key: "images"
  }]
};