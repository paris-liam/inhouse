// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
const path = require('path');
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
      const shopTemplate = path.resolve(`src/templates/shopItem.js`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
          `
            {
                allPrismicProduct{
                edges {
                  node {
                    id
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          // Create pages for each markdown file.
          result.data.allPrismicProduct.edges.forEach(({ node }) => {
            const path = `/shop/${node.id}`;
            createPage({
              path,
              component: shopTemplate,
              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {
                path,
              },
            })
          })
        })
      )
    })
}