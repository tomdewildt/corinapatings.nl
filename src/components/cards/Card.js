import React from "react";
import PropTypes from "prop-types";

const Card = ( {
    title,
    description,
    to,
    color,
    image,
    size,
} ) => (
    <div>
        Card
    </div>
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
