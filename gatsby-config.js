require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteName: "Mycotown"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: {
          env:
            "Y2JkZTRlM2UtNjIyNy00MWEyLWJkMTktMzA1MmJhMDkzMDQzNjM3MjA1NDg5NjAyOTU5MDAz"
        },
        autopop: false
      }
    }
  ]
};
