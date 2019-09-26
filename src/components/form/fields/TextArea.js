import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormGroup from "../Group";
import FormLabel from "../Label";
import FormError from "../Error";
import Base from "./Base";

const Field = styled.textarea`
    ${ Base }
    
    resize: vertical;
`;

const TextArea = ( {
    name,
    label,
    value,
    error,
    onChange,
} ) => (
    <FormGroup>
        <FormLabel htmlFor={ name }>
            { label }
        </FormLabel>
        <Field
            id={ name }
            name={ name }
            value={ value }
            error={ error }
            onChange={ onChange }
        />
        <FormError>
            { error }
        </FormError>
    </FormGroup>
);

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

TextArea.defaultProps = {
    error: null,
};

export default TextArea;
