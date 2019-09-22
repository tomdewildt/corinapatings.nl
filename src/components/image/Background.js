import React from "react";
import styled from "styled-components";
import GatsbyBackground from "gatsby-background-image";
import PropTypes from "prop-types";

const RegularBackground = styled.div`
    background-image: ${ ( { src } ) => `url(${ src })` };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Background = ( { source, className, children } ) => ( typeof source === "string" ? (
    <RegularBackground src={ source } className={ className }>
        { children }
    </RegularBackground>
) : (
    <GatsbyBackground fluid={ source.childImageSharp.fluid } className={ className }>
        { children }
    </GatsbyBackground>
) );

Background.propTypes = {
    source: PropTypes.oneOfType( [
        PropTypes.shape( {
            childImageSharp: PropTypes.shape( {
                fluid: PropTypes.shape( {} ),
            } ),
        } ),
        PropTypes.string,
    ] ).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};

Background.defaultProps = {
    className: null,
    children: null,
};

export default Background;
