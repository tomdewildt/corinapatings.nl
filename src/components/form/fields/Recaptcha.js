import React from "react";
import Recaptcha from "react-recaptcha";
import PropTypes from "prop-types";

const GoogleRecaptcha = ( { className } ) => (
    <Recaptcha
        className={ className }
        sitekey={ process.env.GATSBY_RECAPTCHA_API_KEY }
    />
);

GoogleRecaptcha.propTypes = {
    className: PropTypes.string,
};

GoogleRecaptcha.defaultProps = {
    className: "",
};

export default GoogleRecaptcha;
