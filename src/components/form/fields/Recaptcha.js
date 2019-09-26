import React from "react";
import GoogleRecaptcha from "react-google-recaptcha";
import PropTypes from "prop-types";

import FormGroup from "../Group";

const Recaptcha = ( { onChange } ) => (
    <FormGroup>
        <GoogleRecaptcha
            sitekey={ process.env.GATSBY_RECAPTCHA_API_KEY }
            onChange={ () => onChange( { target: { value: true } } ) }
        />
    </FormGroup>
);

Recaptcha.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Recaptcha;
