module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "https://www.lakanto.com/",
        accessToken: "",
      },
    },
    "gatsby-plugin-sass",
  ],
};
