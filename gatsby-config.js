module.exports = {
    siteMetadata: {
        name: "Corina Patings",
    },
    plugins: [
        "gatsby-plugin-layout",
        {
            resolve: "gatsby-plugin-styled-components",
            options: {
                displayName: false,
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Corina Patings",
                short_name: "Corina Patings",
                start_url: "/",
                theme_color: "#0096ae",
                background_color: "#ffffff",
                display: "standalone",
                icon: "static/images/icon.png",
            },
        },
        "gatsby-plugin-offline",

        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-netlify",
    ],
};
