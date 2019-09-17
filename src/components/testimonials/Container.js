import React from "react";
import PropTypes from "prop-types";

import Heading from "../typography/Heading";
import Padding from "../spacing/Padding";
import Column from "../grid/Column";
import Row from "../grid/Row";

const TestimonialContainer = ( { children } ) => (
    <>
        <Row>
            <Column>
                <Padding top={ 4 } bottom={ 3 }>
                    <Heading.H3 center>Ervaringen</Heading.H3>
                </Padding>
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
