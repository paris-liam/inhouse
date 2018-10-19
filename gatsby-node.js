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
            allPrismicProduct {
              edges {
                node {
                  data {
                    prod_title {
                      text
                    }
                    prod_image1 {
                      localFile {
                        childImageSharp {
                          original {
                            src
                          }
                        }
                      }
                    }
                    prod_image2 {
                      localFile {
                        childImageSharp {
                          original {
                            src
                          }
                        }
                      }
                    }
                    prod_small
                    prod_medium
                    prod_large
                    prod_xl
                    prod_button{
                    raw{
                      type
                      text
                    }}
                    type
                    instock
                    price
                  }
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
            const path = `/shop/${node.data.prod_title.text}`;
            createPage({
              path,
              component: shopTemplate,

              // In your blog post template's graphql query, you can use path
              // as a GraphQL variable to query for data from the markdown file.
              context: {
                prodInfo: node.data,
              },
            })
          })
        })
      )
    })
}