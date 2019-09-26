import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { defaultValues, validateField } from "./helpers";
import Button from "../button/Button";
import {
    Types,
    Input,
    Select,
    TextArea,
    Recaptcha,
} from "./fields";

const FormContainer = styled.form``;

class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            values: defaultValues( props.fields ),
            recaptcha: true,
            errors: {},
        };
    }

    onSubmit = () => {
        const { fields, onSubmit } = this.props;
        const { values, recaptcha } = this.state;

        const errors = fields.reduce( ( e, f ) => {
            const error = validateField( values[ f.name ], f.validations || [] );
            if ( error ) return { ...e, [ f.name ]: error };
            return e;
        }, {} );

        if ( Object.keys( errors ).length > 0 || !recaptcha ) this.setState( { errors } );
        else onSubmit( values );
    }

    onReset = () => {
        const { fields } = this.props;
        this.setState( {
            values: defaultValues( fields ),
            errors: {},
        } );
    }

    onChange = ( field ) => ( e ) => {
        const { onChange } = this.props;
        const { values } = this.state;
        const { value } = e.target;

        const error = validateField( value, field.validations || [] );
        onChange( values );

        this.setState( ( prevState ) => ( {
            values: { ...prevState.values, [ field.name ]: value },
            errors: { ...prevState.errors, [ field.name ]: error },
        } ) );
    }

    onRecaptcha = () => this.setState( { recaptcha: true } );

    renderFields() {
        const { fields } = this.props;
        const { values, errors } = this.state;
        return fields.map( ( f ) => {
            switch ( f.type ) {
                case Types.Select:
                    return (
                        <Select
                            key={ f.name }
                            name={ f.name }
                            label={ f.label }
                            value={ values[ f.name ] }
                            error={ errors[ f.name ] }
                            options={ f.options }
                            onChange={ this.onChange( f ) }
                        />
                    );
                case Types.TextArea:
                    return (
                        <TextArea
                            key={ f.name }
                            name={ f.name }
                            label={ f.label }
                            value={ values[ f.name ] }
                            error={ errors[ f.name ] }
                            onChange={ this.onChange( f ) }
                        />
                    );
                default:
                    return (
                        <Input
                            key={ f.name }
                            type={ f.type }
                            name={ f.name }
                            label={ f.label }
                            value={ values[ f.name ] }
                            error={ errors[ f.name ] }
                            onChange={ this.onChange( f ) }
                        />
                    );
            }
        } );
    }

    render() {
        const { recaptcha } = this.state;
        return (
            <FormContainer data-netlify="true">
                { this.renderFields() }
                <Recaptcha onChange={ this.onRecaptcha } />
                <Button.Primary type="button" onClick={ this.onSubmit } disabled={ !recaptcha }>Versturen</Button.Primary>
                <Button.Secondary type="button" onClick={ this.onReset }>Reset</Button.Secondary>
            </FormContainer>
        );
    }
}

Form.propTypes = {
    fields: PropTypes.arrayOf( PropTypes.shape( {} ) ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
};

Form.defaultProps = {
    onChange: () => {},
};

export default Form;
