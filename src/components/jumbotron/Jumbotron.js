import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Background from "../image/Background";
import Heading from "../typography/Heading";
import Text from "../typography/Text";

const JumbotronContainer = styled( Background )`
    display: flex;
    height: ${ ( { theme } ) => theme.jumbotron.height }%;
    flex-direction: column;
    justify-content: center;
    padding: ${ ( { theme } ) => theme.jumbotron.padding }rem;
    margin-bottom: ${ ( { theme } ) => theme.jumbotron.bottom }rem;
    color: ${ ( { theme } ) => theme.color.white };
`;

const Jumbotron = ( {
    title,
    image,
    description,
} ) => (
    <JumbotronContainer source={ image }>
        <Heading.H1 center>{ title }</Heading.H1>
        <Text.Paragraph center>{ description }</Text.Paragraph>
    </JumbotronContainer>
);

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ).isRequired,
    description: PropTypes.string.isRequired,
};

export default Jumbotron;
