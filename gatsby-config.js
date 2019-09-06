/* eslint-disable max-len */
module.exports = {
    siteMetadata: {
        siteTitle: "Corina Patings",
        siteLanguage: "nl",
        siteDescription: "Individuele begeleiding en coaching aan kinderen/jongeren, ouders en volwassenen gericht op persoonlijke ontwikkeling en bewustwording.",
        siteAvatar: "https://www.corinapatings.nl/images/avatar.png",
        siteAvatarSmall: "https://www.corinapatings.nl/images/avatar-small.png",
        siteBanner: "https://www.corinapatings.nl/images/banner.png",
        siteBannerWidth: "681",
        siteBannerHeight: "390",
        siteUrl: "https://www.corinapatings.nl",
        facebook: "Praktijk-de-Boom-756669217736591",
        linkedin: "corina-patings-b28651a8",
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
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://www.corinapatings.nl",
                sitemap: "https://www.corinapatings.nl/sitemap.xml",
                policy: [ { userAgent: "*", allow: "/" } ],
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
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-netlify",
    ],
};
