import React from "react";
import PropTypes from "prop-types";

import Text from "../typography/Text";
import Column from "../grid/Column";

const Testimonial = ( { text, author } ) => (
    <Column xs={ 12 } sm={ 4 }>
        <Text.Paragraph>{ text }</Text.Paragraph>
        <Text.Paragraph italic>{ `- ${ author }` }</Text.Paragraph>
    </Column>
);

Testimonial.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Testimonial;
