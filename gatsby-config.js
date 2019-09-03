module.exports = {
    siteMetadata: {
        title: "Corina Patings",
        language: "nl",
        description: "",
        headline: "",
        avatar: "https://www.corinapatings.nl/images/avatar.png",
        avatarSmall: "https://www.corinapatings.nl/images/avatar-small.png",
        banner: "https://www.corinapatings.nl/images/banner.png",
        bannerWidth: "",
        bannerHeight: "",
        url: "https://www.corinapatings.nl",
        facebook: "",
        linkedin: "",
    },
    plugins: [
        "gatsby-plugin-layout",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-styled-components",
            options: {
                displayName: process.env.NODE_ENV !== "production",
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
