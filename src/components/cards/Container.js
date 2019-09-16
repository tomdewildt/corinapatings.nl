import React from "react";
import PropTypes from "prop-types";

const CardContainer = ( { children } ) => (
    <div>
        { children }
    </div>
);

CardContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardContainer;
