/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/`
 */

module.exports = {
  siteMetadata: {
    title: "Web Development Reference Guide",
    description: "A simple reference guide and cheatsheet on popular web development technologies with content aimed toward newer web developers.",
    author: "Jason Roundtree"
    // url: "https://www.reference.jasonroundtree.info",
    // image: "/images/", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'up6uy0tw',
        dataset: 'production',
        useCdn: false
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}