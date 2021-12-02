module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.lionelritchie.gatsbyjs.io',
    title: 'Lionel Personal Portfolio',
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: './src/data/blog/',
      },
      __key: 'blog',
    },
  ],
};
