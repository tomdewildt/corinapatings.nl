import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormGroup from "../Group";
import FormLabel from "../Label";
import FormError from "../Error";
import Base from "./Base";

const Field = styled.input`
    ${ Base }
`;

const Input = ( {
    name,
    label,
    type,
    value,
    error,
    onChange,
} ) => (
    <FormGroup>
        <FormLabel htmlFor={ name }>
            { label }
        </FormLabel>
        <Field
            type={ type }
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

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ).isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
    error: null,
};

export default Input;
