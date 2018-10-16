module.exports = {
  siteMetadata: {
    title: 'IN-HOUSE',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'IN-HOUSE',
        short_name: 'inhouse',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families:['Stoke','Almendra','Archivo Black','Michroma',
          'Fredoka One','Press Start 2P','Freckle Face','UnifrakturMaguntia',
          'Uncial Antiqua','Codystar','Rakkas', 'Pirata One',
          'Goblin One','Libre Barcode 39 Extended Text',
          'Molle','Source Code Pro','Cousine','Oswald',]
        }
      }
    },
    {
      resolve:'gatsby-source-prismic',
      options: {
            repositoryName: "inhouse",
            accessToken: "MC5XOFVka0JRQUFDb0F1REtZ.77-977-9PU_vv70z77-9K2rvv71nC--_ve-_vW1UCe-_ve-_vT9adu-_vSzvv73vv70E77-9Au-_vUou",
            // Set a link resolver function used to process links in your content.
            // Fields with rich text formatting or links to internal content use this
            // function to generate the correct link URL.
            // The document node, field key (i.e. API ID), and field value are
            // provided to the function, as seen below. This allows you to use
            // different link resolver logic for each field if necessary.
            // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
            linkResolver: ({ node, key, value }) => doc => {
              // Your link resolver
            },
            // Set a list of links to fetch and be made available in your link
            // resolver function.
            // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
            fetchLinks: [
              // Your list of links
            ],
            // Set an HTML serializer function used to process formatted content.
            // Fields with rich text formatting use this function to generate the
            // correct HTML.
            // The document node, field key (i.e. API ID), and field value are
            // provided to the function, as seen below. This allows you to use
            // different HTML serializer logic for each field if necessary.
            // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
            htmlSerializer: ({ node, key, value }) => (
              (type, element, content, children) => {
                // Your HTML serializer
              }
            ),
            lang: 'en-us',
          }
        },
  ],
}
