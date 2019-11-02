import React from "react";
import { withTheme } from "styled-components";
import CookieConsent from "react-cookie-consent";
import PropTypes from "prop-types";

const ConsentContainer = ( theme ) => ( {
    display: "flex",
    padding: "0.5rem 1rem",
    alignItems: "center",
    justifyContent: "center",
    color: theme.color.grayDark,
    background: theme.color.grayLightest,
} );

const ConsentContent = () => ( {
    margin: "0.5rem",
    textAlign: "center",
} );

const ConsentButton = ( theme ) => ( {
    display: "inline-block",
    margin: "0",
    padding: `${ theme.button.padding }rem ${ theme.button.padding * 2.5 }rem`,
    border: `1px solid ${ theme.color.gray }`,
    borderRadius: `${ theme.button.radius }rem`,
    font: "inherit",
    fontSize: `${ theme.button.size }rem`,
    textDecoration: "none",
    textTransform: "none",
    background: theme.color.grayLight,
    color: theme.color.grayDark,
} );

const Consent = ( { theme } ) => (
    <CookieConsent
        location="bottom"
        buttonText="Sluiten"
        cookieName="SITE_CONSENT"
        style={ ConsentContainer( theme ) }
        buttonStyle={ ConsentButton( theme ) }
        contentStyle={ ConsentContent( theme ) }
        expires={ 150 }
    >
        Deze website maakt gebruik van cookies om de gebruikerservaring te verbeteren.
    </CookieConsent>
);

Consent.propTypes = {
    theme: PropTypes.shape( {} ).isRequired,
};

export default withTheme( Consent );
