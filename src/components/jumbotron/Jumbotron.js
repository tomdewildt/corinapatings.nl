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
    background-position: ${ ( { offset } ) => `50% ${ 50 + offset }%` };
`;

const Jumbotron = ( {
    title,
    image,
    offset,
    description,
} ) => (
    <JumbotronContainer source={ image } offset={ offset }>
        { title && <Heading.H1 center>{ title }</Heading.H1> }
        { description && <Text.Paragraph center>{ description }</Text.Paragraph> }
    </JumbotronContainer>
);

Jumbotron.propTypes = {
    title: PropTypes.string,
    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ).isRequired,
    offset: PropTypes.number,
    description: PropTypes.string,
};

Jumbotron.defaultProps = {
    title: null,
    offset: 0,
    description: null,
};

export default Jumbotron;
