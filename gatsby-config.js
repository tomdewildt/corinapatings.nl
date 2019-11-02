const metadata = require( "./src/assets/metadata.json" );

module.exports = {
    siteMetadata: { siteUrl: metadata.general.url },
    plugins: [
        "gatsby-plugin-sharp",
        "gatsby-plugin-layout",
        "gatsby-plugin-react-svg",
        "gatsby-transformer-sharp",
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
                policy: [ { userAgent: "*", allow: "/", disallow: "/admin/" } ],
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
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${ __dirname }/static/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${ __dirname }/src/pages`,
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "images",
                        },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1136,
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${ __dirname }/src/cms/cms.js`,
            },
        },
        "gatsby-plugin-sitemap",
        "gatsby-plugin-netlify",
    ],
};
