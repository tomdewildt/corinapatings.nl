import React from "react";
import Obfuscate from "react-obfuscate";
import styled from "styled-components";

import Facebook from "../../assets/facebook.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Document from "../../assets/document.svg";
import Text from "../typography/Text";
import Column from "../grid/Column";
import GoogleMap from "../map/Map";
import Row from "../grid/Row";

const Paragraph = styled( Text.Paragraph )`
    font-weight: 700;
    color: ${ ( { theme } ) => theme.color.grayDark };
`;

const ObfuscatedLink = styled( Obfuscate )`
    display: block;
    font-weight: 700;
    text-align: left;
    color: ${ ( { theme } ) => theme.color.grayDark };
    margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;

    &:hover {
        color: ${ ( { theme } ) => theme.color.grayDarkest };
    }
`;

const Link = styled.a`
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

const Map = styled( GoogleMap )`
    height: 15rem;
    width: 100%;
    border: none;
`;

const ContactDetails = () => (
    <>
        <Row>
            <Column xs={ 6 }>
                <Paragraph>Corina Patings</Paragraph>
                <Paragraph>Meijldoorn 6</Paragraph>
                <Paragraph>5482 SG</Paragraph>
                <ObfuscatedLink tel="+31 6 51778528" />
                <ObfuscatedLink email="info@corinapatings.nl" />
            </Column>
            <Column xs={ 6 }>
                <Link href="/" target="_blank">
                    <LinkedIn />
                    LinkedIn
                </Link>
                <Link href="/" target="_blank">
                    <Facebook />
                    Facebook
                </Link>
                <Link href="/" target="_blank">
                    <Document />
                    Algemene Voorwaarde
                </Link>
                <Link href="/" target="_blank">
                    <Document />
                    Privacy Verklaring
                </Link>
            </Column>
        </Row>
        <Row>
            <Column>
                <Map place="ChIJCyKBdAfmxkcRyR-MeDWkcdI" />
            </Column>
        </Row>
    </>
);

export default ContactDetails;
