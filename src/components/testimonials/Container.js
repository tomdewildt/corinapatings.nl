import React from "react";
import PropTypes from "prop-types";

const TestimonialContainer = ( { children } ) => (
    <div>
        { children }
    </div>
);

TestimonialContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TestimonialContainer;
