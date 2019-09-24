import React from "react";
import PropTypes from "prop-types";

import Heading from "../typography/Heading";
import Column from "../grid/Column";
import Row from "../grid/Row";

const TestimonialContainer = ( { children } ) => (
    <>
        <Row>
            <Column>
                <Heading.H2 center>Ervaringen</Heading.H2>
            </Column>
        </Row>
        <Row>
            { children }
        </Row>
    </>
);

TestimonialContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TestimonialContainer;
