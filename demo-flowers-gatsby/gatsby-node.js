/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const queryResults = await graphql(`
    query AllFlower {
      allSanityFlower {
    nodes {
      description {
        _rawChildren
      }
      flowername
      id
      sciencename
      slug {
        current
      }
      soil
      water
      sun {
        title
      }
      mainImage {
        asset {
          altText
          gatsbyImageData(width: 500, placeholder: BLURRED, layout: FIXED)
        }
      }
    }
  }
    }
  `)

  const flowerTemplate = path.resolve(`src/templates/flower.jsx`)
  queryResults.data.allSanityFlower.nodes.forEach(node => {
    createPage({
      path: `/${node.slug.current}`,
      component: flowerTemplate,
      context: {
        // This time the entire product is passed down as context
        flower: node,
      },
    })
  })
}
