module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.lionelritchie.gatsbyjs.io',
    title: 'Lionel Personal Portfolio',
  },
  plugins: [
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
        path: './data/blog/',
      },
      __key: 'blog',
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            // options: {
            //   classPrefix: 'language-',
            // },
          },
        ],
      },
    },
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
