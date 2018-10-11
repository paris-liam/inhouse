module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'IN-HOUSE',
        short_name: 'inhouse',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
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
    }
  ],
}
