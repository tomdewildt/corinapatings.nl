import React from "react";
import styled from "styled-components";
import GatsbyImage from "gatsby-image";
import PropTypes from "prop-types";

const StyledImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
`;

const Image = ( { source, alt } ) => ( typeof source === "string" ? (
    <StyledImage src={ source } alt={ alt } />
) : (
    <GatsbyImage fluid={ source.childImageSharp.fluid } alt={ alt } />
) );

Image.propTypes = {
    source: PropTypes.oneOfType( [
        PropTypes.shape( {
            childImageSharp: PropTypes.shape( {
                fluid: PropTypes.shape( {} ),
            } ),
        } ),
        PropTypes.string,
    ] ).isRequired,
    alt: PropTypes.string,
};

Image.defaultProps = {
    alt: "image",
};

export default Image;
