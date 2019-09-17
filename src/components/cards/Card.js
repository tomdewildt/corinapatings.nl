import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Column from "../grid/Column";

const Card = ( {
    title,
    description,
    to,
    color,
    image,
    size,
} ) => (
    <Column xs={ 12 } sm={ ( 12 / 4 ) * size }>
        Card
    </Column>
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
