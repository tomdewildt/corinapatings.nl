import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Image from "../image/Image";

const Container = styled.div`
    position: relative;
`;

const TextBlock = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 ${ ( { theme } ) => theme.jumbotron.padding }rem;
    color: ${ ( { theme } ) => theme.color.white };
    text-align: center;
`;

const Title = styled.h1`
    font-family: ${ ( { theme } ) => theme.jumbotron.title.font };
    line-height: ${ ( { theme } ) => theme.jumbotron.title.lineHeight };
    font-weight: 700;

    ${ ( { theme } ) => Object.keys( theme.jumbotron.title.sizes ).map( ( key ) => css`
        @media only screen and (min-width: ${ theme.breakpoints[ key ] }em) {
            font-size: ${ theme.jumbotron.title.sizes[ key ] }rem;
        }
    ` ) }
`;

const Description = styled.p`
    ${ ( { theme } ) => Object.keys( theme.jumbotron.description.sizes ).map( ( key ) => css`
        @media only screen and (min-width: ${ theme.breakpoints[ key ] }em) {
            font-size: ${ theme.jumbotron.description.sizes[ key ].fontSize }rem;
            max-width: ${ theme.jumbotron.description.sizes[ key ].width }rem;
        }
    ` ) }
`;

const Jumbotron = ( {
    title,
    image,
    description,
} ) => (
    <Container>
        <Image source={ image } alt="image" />
        <TextBlock>
            <Title>{ title }</Title>
            <Description>{ description }</Description>
        </TextBlock>
    </Container>
);

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ).isRequired,
    description: PropTypes.string.isRequired,
};

export default Jumbotron;
