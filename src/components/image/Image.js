import React from "react";
import styled from "styled-components";
import GatsbyImage from "gatsby-image";
import PropTypes from "prop-types";

const RegularImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const Image = ( { source, alt, className } ) => ( typeof source === "string" ? (
    <RegularImage
        src={ source }
        alt={ alt }
        className={ className }
    />
) : (
    <GatsbyImage
        fluid={ source.childImageSharp.fluid }
        fixed={ source.childImageSharp.fixed }
        alt={ alt }
        className={ className }
    />
) );

Image.propTypes = {
    source: PropTypes.oneOfType( [
        PropTypes.shape( {
            childImageSharp: PropTypes.shape( {
                fluid: PropTypes.shape( {} ),
                fixed: PropTypes.shape( {} ),
            } ),
        } ),
        PropTypes.string,
    ] ).isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

Image.defaultProps = {
    alt: "image",
    className: null,
};

export default Image;
