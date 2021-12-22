// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /tiny-slider-react/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MdxFrontmatter implements Node {
      date: String
      tags: [String]
      hero_image_alt: String
      hero_image_credit_text: String
      hero_image_credit_link: String
      hero_image: HeroImage
    }
    type HeroImage {
      childImageSharp: GatsbyImageData
    }
    type GatsbyImageData {
      gatsbyImageData: String
    }
  `;
  createTypes(typeDefs);
};
