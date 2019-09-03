module.exports = {
    siteMetadata: {
        name: "Corina Patings",
    },
    plugins: [
        "gatsby-plugin-layout",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Corina Patings",
                short_name: "Corina Patings",
                start_url: "/",
                theme_color: "#0096ae",
                background_color: "#ffffff",
                display: "standalone",
                icons: [
                    {
                        src: "static/icons/icon-48x48.png",
                        sizes: "48x48",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-256x256.png",
                        sizes: "256x256",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "static/icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        },
        "gatsby-plugin-offline",

        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-netlify",
    ],
};
