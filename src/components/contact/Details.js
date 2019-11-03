import React from "react";
import Obfuscate from "react-obfuscate";
import styled from "styled-components";
import PropTypes from "prop-types";

import Facebook from "../../assets/facebook.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Document from "../../assets/document.svg";
import Text from "../typography/Text";
import Column from "../grid/Column";
import GoogleMap from "../map/Map";
import Row from "../grid/Row";

const ContactItem = styled( Text.Paragraph )`
    font-weight: 700;
    color: ${ ( { theme } ) => theme.color.grayDark };
`;

const ContactItemLink = styled( Obfuscate )`
    display: block;
    font-weight: 700;
    text-align: left;
    color: ${ ( { theme } ) => theme.color.grayDark };
    margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;

    &:hover {
        color: ${ ( { theme } ) => theme.color.grayDarkest };
    }
`;

const ContactLink = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;
    font-weight: 700;
    font-size: ${ ( { theme } ) => theme.typography.size }rem;
    color: ${ ( { theme } ) => theme.color.grayDark };
    text-decoration: none; 

    svg {
        margin-right: 0.5rem;
        fill: ${ ( { theme } ) => theme.color.grayDark };
    }

    &:hover {
        color: ${ ( { theme } ) => theme.color.grayDarkest };

        svg { fill: ${ ( { theme } ) => theme.color.grayDarkest }; }
    }
`;

const ContactMap = styled( GoogleMap )`
    height: 15.5rem;
    width: 100%;
    border: none;
`;

const ContactDetails = ( {
    url,
    name,
    address,
    postalCode,
    phone,
    email,
    linkedin,
    facebook,
} ) => (
    <>
        <Row>
            <Column sm={ 6 }>
                <ContactItem>{ name }</ContactItem>
                <ContactItem>{ address }</ContactItem>
                <ContactItem>{ postalCode }</ContactItem>
                <ContactItemLink tel={ phone } />
                <ContactItemLink email={ email } />
            </Column>
            <Column sm={ 6 }>
                <ContactLink href={ `https://www.linkedin.com/in/${ linkedin }` } rel="noopener" target="_blank">
                    <LinkedIn />
                    LinkedIn
                </ContactLink>
                <ContactLink href={ `https://www.facebook.com/${ facebook }` } rel="noopener" target="_blank">
                    <Facebook />
                    Facebook
                </ContactLink>
                <ContactLink href={ `${ url }/docs/terms-of-service.pdf` } target="_blank">
                    <Document />
                    Algemene Voorwaarden
                </ContactLink>
                <ContactLink href={ `${ url }/docs/privacy-declaration.pdf` } target="_blank">
                    <Document />
                    Privacy Verklaring
                </ContactLink>
            </Column>
        </Row>
        <Row>
            <Column>
                <ContactMap place="ChIJCyKBdAfmxkcRyR-MeDWkcdI" />
            </Column>
        </Row>
    </>

);

ContactDetails.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
};

export default ContactDetails;
