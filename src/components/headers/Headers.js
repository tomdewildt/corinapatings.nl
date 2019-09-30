/* eslint complexity: 0 */
import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import metadata from "../../assets/metadata.json";

const Headers = ( {
    title,
    description,
    keywords,
    path,
    data: { site: { buildTime } },
} ) => {
    const organization = ( type ) => ( {
        "@context": "http://schema.org",
        "@id": `${ metadata.general.url }/#${ type }`,
        "@type": "Organization",
        address: {
            "@type": "PostalAddress",
            addressCountry: "NL",
            addressLocality: "",
            postalCode: metadata.contact.postalCode,
        },
        name: metadata.general.title,
        description: metadata.general.description,
        url: metadata.general.url,
        email: metadata.contact.email,
        founder: metadata.contact.name,
        foundingDate: "2019-10-01",
        foundingLocation: "Netherlands",
        image: {
            "@type": "ImageObject",
            url: metadata.social.avatar,
            height: "512",
            width: "512",
        },
        logo: {
            "@type": "ImageObject",
            url: metadata.social.avatarSmall,
            height: "60",
            width: "60",
        },
        sameAs: [
            `https://www.facebook.com/${ metadata.social.facebook }`,
            `https://www.linkedin.com/in/${ metadata.social.linkedin }`,
        ],
    } );

    const page = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        url: `${ metadata.general.url }/${ path }`,
        headline: metadata.general.description,
        inLanguage: metadata.general.language,
        mainEntityOfPage: `${ metadata.general.url }/${ path }`,
        description: description || metadata.general.description,
        name: title || metadata.general.title,
        author: { "@id": `${ metadata.general.url }/#identity` },
        copyrightHolder: { "@id": `${ metadata.general.url }/#identity` },
        copyrightYear: new Date().getFullYear(),
        creator: { "@id": `${ metadata.general.url }/#creator` },
        publisher: { "@id": `${ metadata.general.url }/#creator` },
        datePublished: "2019-10-01",
        dateModified: buildTime,
        image: {
            "@type": "ImageObject",
            url: metadata.social.banner,
        },
    };

    return (
        <Helmet defer={ false }>
            <html lang={ metadata.general.language } />
            <title>{ title || metadata.general.title }</title>
            <meta name="description" content={ description || metadata.general.description } />
            <meta name="keywords" content={ keywords || metadata.general.keywords } />
            <meta name="image" content={ metadata.social.banner } />
            <meta property="og:url" content={ `${ metadata.general.url }/${ path }` } />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={ title || metadata.general.title } />
            <meta property="og:description" content={ description || metadata.general.description } />
            <meta property="og:image" content={ metadata.social.banner } />
            <meta property="og:image:alt" content="" />
            <meta property="og:image:width" content={ metadata.social.bannerWidth } />
            <meta property="og:image:height" content={ metadata.social.bannerHeight } />
            <meta property="og:see_also" content={ `https://www.facebook.com/${ metadata.social.facebook }` } />
            <meta property="og:see_also" content={ `https://www.linkedin.com/in/${ metadata.social.linkedin }` } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ title || metadata.general.title } />
            <meta name="twitter:description" content={ description || metadata.general.description } />
            <meta name="twitter:image" content={ metadata.social.banner } />
            <meta name="twitter:image:alt" content="" />
            <meta name="twitter:image:width" content={ metadata.social.bannerWidth } />
            <meta name="twitter:image:height" content={ metadata.social.bannerHeight } />
            <script type="application/ld+json">{ JSON.stringify( page ) }</script>
            <script type="application/ld+json">{ JSON.stringify( organization( "creator" ) ) }</script>
            <script type="application/ld+json">{ JSON.stringify( organization( "identity" ) ) }</script>
        </Helmet>
    );
};

Headers.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    path: PropTypes.string,
    data: PropTypes.shape( {
        site: PropTypes.shape( {
            buildTime: PropTypes.string.isRequired,
        } ).isRequired,
    } ).isRequired,
};

Headers.defaultProps = {
    title: null,
    description: null,
    keywords: null,
    path: "",
};

const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD")
        }
    }
`;

// eslint-disable-next-line
export default ( props ) => <StaticQuery query={ query } render={ ( data ) => <Headers data={ data } { ...props } /> } />;
