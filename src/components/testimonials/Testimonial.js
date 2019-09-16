import React from "react";
import PropTypes from "prop-types";

const Testimonial = ( { text, author } ) => (
    <div>
        Testimonial
    </div>
);

Testimonial.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Testimonial;
