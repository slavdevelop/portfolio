module.exports = {
  siteMetadata: {
    title: `Shtipkov's portfolio`,
    description: `Portfolio Gatsbyjs website`,
    author: `Slavi Shtipkov`,
    contact: {
      email: 'slavi@shtipkov.com',
      phone: '+359896765897'
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    }
  ]
};
