import React from "react";
import PropTypes from "prop-types";

import Row from "../grid/Row";

const CardContainer = ( { children } ) => (
    <Row>
        { children }
    </Row>
);

CardContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CardContainer;
