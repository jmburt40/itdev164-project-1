module.exports = {
  siteMetadata: {
    title: `Milwaukee Spots`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
      plugins: [
        

        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `markdown-pages`,
            path: `${__dirname}/content/blog`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/static/admin/assets`,
            name: "images",
          },
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              `gatsby-transformer-sharp`,
              `gatsby-plugin-sharp`,
              {
                resolve: `gatsby-plugin-netlify-cms-paths`,
                options: {
                  // Path to your Netlify CMS config file
                  cmsConfig: `/static/admin/config.yml`,
                },
              },
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 300,
                },
              },
            ],
          },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
          },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
      ],
    }