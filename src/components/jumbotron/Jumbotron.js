import React from "react";
import PropTypes from "prop-types";

const Jumbotron = ( {
    title,
    image,
    description,
} ) => (
    <div>
        Jumbotron
    </div>
);

Jumbotron.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ).isRequired,
    description: PropTypes.string.isRequired,
};

export default Jumbotron;
