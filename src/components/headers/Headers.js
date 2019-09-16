/* eslint complexity: 0 */
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Headers = ( {
    title,
    description,
    path,
    data: { site: { buildTime, config } },
} ) => {
    const organization = ( type ) => ( {
        "@context": "http://schema.org",
        "@id": `${ config.siteUrl }/#${ type }`,
        "@type": "Organization",
        address: {
            "@type": "PostalAddress",
            addressCountry: "NL",
            addressLocality: "",
            postalCode: "5482SG",
        },
        name: config.siteTitle,
        description: config.siteDescription,
        url: config.siteUrl,
        email: "info@corinapatings.nl",
        founder: "Corina Patings",
        foundingDate: "2019-10-01",
        foundingLocation: "Netherlands",
        image: {
            "@type": "ImageObject",
            url: config.siteAvatar,
            height: "512",
            width: "512",
        },
        logo: {
            "@type": "ImageObject",
            url: config.siteAvatarSmall,
            height: "60",
            width: "60",
        },
        sameAs: [
            `https://www.facebook.com/${ config.facebook }`,
            `https://www.linkedin.com/in/${ config.linkedin }`,
        ],
    } );

    const page = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: `${ config.siteUrl }/${ path }`,
        headline: config.siteDescription,
        inLanguage: config.siteLanguage,
        mainEntityOfPage: `${ config.siteUrl }/${ path }`,
        description: description || config.siteDescription,
        name: title || config.siteTitle,
        author: { "@id": `${ config.siteUrl }/#identity` },
        copyrightHolder: { "@id": `${ config.siteUrl }/#identity` },
        copyrightYear: "2019",
        creator: { "@id": `${ config.siteUrl }/#creator` },
        publisher: { "@id": `${ config.siteUrl }/#creator` },
        datePublished: "2019-10-01",
        dateModified: buildTime,
        image: {
            "@type": "ImageObject",
            url: config.siteBanner,
        },
    };

    return (
        <Helmet>
            <html lang={ config.siteLanguage } />
            <title>{ title || config.siteTitle }</title>
            <meta name="description" content={ description || config.siteDescription } />
            <meta name="image" content={ config.siteBanner } />
            <meta property="og:url" content={ `${ config.siteUrl }/${ path }` } />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ title || config.siteTitle } />
            <meta property="og:description" content={ description || config.siteDescription } />
            <meta property="og:image" content={ config.siteBanner } />
            <meta property="og:image:alt" content="" />
            <meta property="og:image:width" content={ config.siteBannerWidth } />
            <meta property="og:image:height" content={ config.siteBannerHeight } />
            <meta property="og:see_also" content={ `https://www.facebook.com/${ config.facebook }` } />
            <meta property="og:see_also" content={ `https://www.linkedin.com/in/${ config.linkedin }` } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ title || config.siteTitle } />
            <meta name="twitter:description" content={ description || config.siteDescription } />
            <meta name="twitter:image" content={ config.siteBanner } />
            <meta name="twitter:image:alt" content="" />
            <meta name="twitter:image:width" content={ config.siteBannerWidth } />
            <meta name="twitter:image:height" content={ config.siteBannerHeight } />
            <script type="application/ld+json">{ JSON.stringify( page ) }</script>
            <script type="application/ld+json">{ JSON.stringify( organization( "creator" ) ) }</script>
            <script type="application/ld+json">{ JSON.stringify( organization( "identity" ) ) }</script>
        </Helmet>
    );
};

Headers.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    path: PropTypes.string,
    data: PropTypes.shape( {
        site: PropTypes.shape( {
            buildTime: PropTypes.string.isRequired,
            config: PropTypes.shape( {
                siteTitle: PropTypes.string.isRequired,
                siteLanguage: PropTypes.string.isRequired,
                siteDescription: PropTypes.string.isRequired,
                siteAvatar: PropTypes.string.isRequired,
                siteAvatarSmall: PropTypes.string.isRequired,
                siteBanner: PropTypes.string.isRequired,
                siteBannerWidth: PropTypes.string.isRequired,
                siteBannerHeight: PropTypes.string.isRequired,
                siteUrl: PropTypes.string.isRequired,
                facebook: PropTypes.string.isRequired,
                linkedin: PropTypes.string.isRequired,
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

Headers.defaultProps = {
    title: null,
    description: null,
    path: "",
};

const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD")
            config: siteMetadata {
                siteTitle
                siteLanguage
                siteDescription
                siteAvatar
                siteAvatarSmall
                siteBanner
                siteBannerWidth
                siteBannerHeight
                siteUrl
                facebook
                linkedin
            }
        }
    }
`;

// eslint-disable-next-line
export default ( props ) => <StaticQuery query={ query } render={ ( data ) => <Headers data={ data } { ...props } /> } />;
