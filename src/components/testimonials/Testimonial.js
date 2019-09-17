import React from "react";
import PropTypes from "prop-types";

import Padding from "../spacing/Padding";
import Text from "../typography/Text";
import Column from "../grid/Column";

const Testimonial = ( { text, author } ) => (
    <Column xs={ 12 } sm={ 4 }>
        <Padding bottom={ 2 }>
            <Text.Paragraph center>{ text }</Text.Paragraph>
            <Text.Paragraph center italic>{ `- ${ author }` }</Text.Paragraph>
        </Padding>
    </Column>
);

Testimonial.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Testimonial;
