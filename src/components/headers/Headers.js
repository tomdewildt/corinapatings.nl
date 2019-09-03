/* eslint complexity: 0 */
import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Headers = ( { title, description, data: { site: { buildTime, config } } } ) => {
    const organization = ( type ) => ( {
        "@context": "http://schema.org",
        "@id": `${ config.url }/#${ type }`,
        "@type": "Organization",
        address: {
            "@type": "PostalAddress",
            addressCountry: "NL",
            addressLocality: "",
            postalCode: "5482SG",
        },
        name: config.title,
        description: config.description,
        url: config.url,
        email: "info@corinapatings.nl",
        founder: "Corina Patings",
        foundingDate: "2019-10-01",
        foundingLocation: "Netherlands",
        image: {
            "@type": "ImageObject",
            url: config.avatar,
            height: "512",
            width: "512",
        },
        logo: {
            "@type": "ImageObject",
            url: config.avatarSmall,
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
        url: window.location.href,
        headline: config.description,
        inLanguage: config.language,
        mainEntityOfPage: window.location.href,
        description: config.description,
        name: config.title,
        author: { "@id": `${ config.url }/#identity` },
        copyrightHolder: { "@id": `${ config.url }/#identity` },
        copyrightYear: "2019",
        creator: { "@id": `${ config.url }/#creator` },
        publisher: { "@id": `${ config.url }/#creator` },
        datePublished: "2019-10-01",
        dateModified: buildTime,
        image: {
            "@type": "ImageObject",
            url: config.banner,
        },
    };

    return (
        <Helmet>
            <html lang={ config.language } />
            <title>{ config.title }</title>
            <meta name="description" content={ config.description } />
            <meta name="image" content={ config.banner } />
            <meta property="og:url" content={ window.location.href } />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ title || config.title } />
            <meta property="og:description" content={ description || config.description } />
            <meta property="og:image" content={ config.banner } />
            <meta property="og:image:alt" content="" />
            <meta property="og:image:width" content={ config.bannerWidth } />
            <meta property="og:image:height" content={ config.bannerHeight } />
            <meta property="og:see_also" content={ `https://www.facebook.com/${ config.facebook }` } />
            <meta property="og:see_also" content={ `https://www.linkedin.com/in/${ config.linkedin }` } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ title || config.title } />
            <meta name="twitter:description" content={ description || config.description } />
            <meta name="twitter:image" content={ config.banner } />
            <meta name="twitter:image:alt" content="" />
            <meta name="twitter:image:width" content={ config.bannerWidth } />
            <meta name="twitter:image:height" content={ config.bannerHeight } />
            <script type="application/ld+json">{ JSON.stringify( page ) }</script>
            <script type="application/ld+json">{ JSON.stringify( organization( "creator" ) ) }</script>
            <script type="application/ld+json">{ JSON.stringify( organization( "identity" ) ) }</script>
        </Helmet>
    );
};

Headers.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    data: PropTypes.shape( {
        site: PropTypes.shape( {
            buildTime: PropTypes.string.isRequired,
            config: PropTypes.shape( {
                title: PropTypes.string.isRequired,
                language: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                headline: PropTypes.string.isRequired,
                avatar: PropTypes.string.isRequired,
                avatarSmall: PropTypes.string.isRequired,
                banner: PropTypes.string.isRequired,
                bannerWidth: PropTypes.string.isRequired,
                bannerHeight: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                facebook: PropTypes.string.isRequired,
                linkedin: PropTypes.string.isRequired,
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

Headers.defaultProps = {
    title: null,
    description: null,
};

const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD")
            config: siteMetadata {
                title
                language
                description
                headline
                avatar
                avatarSmall
                banner
                bannerWidth
                bannerHeight
                url
                facebook
                linkedin
            }
        }
    }
`;

// eslint-disable-next-line
export default ( props ) => <StaticQuery query={ query } render={ ( data ) => <Headers data={ data } { ...props } /> } />;
