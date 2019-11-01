import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Heading from "../typography/Heading";
import Margin from "../spacing/Margin";
import Text from "../typography/Text";
import Column from "../grid/Column";
import Image from "../image/Image";
import CardButton from "./Button";

const CardColumn = styled( Column )`
    display: flex;
    max-height: ${ ( { theme } ) => theme.cards.height }rem;
    padding: ${ ( { theme } ) => theme.cards.gutter }rem;

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.breakpoints.sm }em) {
            max-height: 100%;
        }
    ` }
`;

const CardBackground = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: ${ ( { theme } ) => theme.cards.padding }rem;
    color: ${ ( { theme } ) => theme.color.white };

    ${ ( { color, theme } ) => color && `background-color: ${ theme.color[ color ] }` };
    ${ ( { center } ) => center && "align-items: center" };
`;

const CardImage = styled( Image )`
    display: flex;
    width: 100%;
`;

const Card = ( {
    title,
    description,
    to,
    color,
    image,
    size,
} ) => {
    const isCentered = parseInt( size, 10 ) === 1;
    return (
        <CardColumn xs={ 12 } sm={ ( 12 / 4 ) * parseInt( size, 10 ) }>
            { !image ? (
                <CardBackground color={ color } center={ isCentered }>
                    { title && <Heading.H5 center={ isCentered }>{ title }</Heading.H5> }
                    { description && <Text.Paragraph center={ isCentered }>{ description }</Text.Paragraph> }
                    { to && (
                        <Margin top={ 1 }>
                            <CardButton to={ `/${ to }/` } color={ color }>Lees Meer</CardButton>
                        </Margin>
                    ) }
                </CardBackground>
            ) : (
                <CardImage source={ image } alt="image" />
            ) }
        </CardColumn>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    to: PropTypes.string,
    color: PropTypes.string,
    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
    size: PropTypes.string.isRequired,
};

Card.defaultProps = {
    title: null,
    description: null,
    to: null,
    color: null,
    image: null,
};

export default Card;
