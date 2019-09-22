import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Heading from "../typography/Heading";
import Margin from "../spacing/Margin";
import Text from "../typography/Text";
import Column from "../grid/Column";
import Image from "../image/Image";
import CardButton from "./Button";

const CardColumn = styled( Column )`
    padding: ${ ( { theme } ) => theme.cards.gutter }rem;
`;

const CardBackground = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: ${ ( { theme } ) => theme.cards.padding }rem;
    color: ${ ( { theme } ) => theme.color.white };

    ${ ( { color, theme } ) => color && `background-color: ${ theme.color[ color ] }` };
    ${ ( { center } ) => center && "align-items: center" };
`;

const CardImage = styled( Image )`    
    height: 100%;
`;

const Card = ( {
    title,
    description,
    to,
    color,
    image,
    size,
} ) => (
    <CardColumn xs={ 12 } sm={ ( 12 / 4 ) * size }>
        { !image ? (
            <CardBackground color={ color } center={ size === 1 }>
                { title && <Heading.H5 center={ size === 1 }>{ title }</Heading.H5> }
                { description && <Text.Paragraph center={ size === 1 }>{ description }</Text.Paragraph> }
                { to && (
                    <Margin right={ 0 }>
                        <CardButton to={ to } color={ color }>Lees Meer</CardButton>
                    </Margin>
                ) }
            </CardBackground>
        ) : (
            <CardImage source={ image } alt="image" />
        ) }
    </CardColumn>
);

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    to: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
    size: PropTypes.number.isRequired,
};

Card.defaultProps = {
    title: null,
    description: null,
    to: null,
    color: null,
    image: null,
};

export default Card;
