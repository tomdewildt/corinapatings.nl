import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormGroup from "../Group";
import FormLabel from "../Label";
import FormError from "../Error";
import Base from "./Base";

const Field = styled.select`
    ${ Base }
`;

const Select = ( {
    name,
    label,
    value,
    options,
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
        >
            { options.map( ( o ) => <option key={ o.value } value={ o.value }>{ o.label }</option> ) }
        </Field>
        <FormError>
            { error }
        </FormError>
    </FormGroup>
);

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType( [
        PropTypes.string,
        PropTypes.number,
    ] ).isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape( {
            value: PropTypes.oneOfType( [
                PropTypes.number,
                PropTypes.string,
            ] ),
            label: PropTypes.string,
        } ),
    ).isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
    error: null,
};

export default Select;
