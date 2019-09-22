import React from "react";
import Obfuscate from "react-obfuscate";
import styled from "styled-components";

import Facebook from "../../assets/facebook.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Document from "../../assets/document.svg";
import TextArea from "../form/fields/TextArea";
import Heading from "../typography/Heading";
import Input from "../form/fields/Input";
import Text from "../typography/Text";
import FormGroup from "../form/Group";
import FormLabel from "../form/Label";
import Button from "../button/Button";
import Column from "../grid/Column";
import GoogleMap from "../map/Map";
import Form from "../form/Form";
import Row from "../grid/Row";

const Paragraph = styled( Text.Paragraph )`
    font-weight: 700;
    color: ${ ( { theme } ) => theme.color.grayDark };
`;

const Phone = styled( Obfuscate )`
    display: block;
    font-weight: 700;
    text-align: left;
    color: ${ ( { theme } ) => theme.color.grayDark };
    margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;

    &:hover {
        color: ${ ( { theme } ) => theme.color.grayDarkest };
    }
`;

const Email = styled( Obfuscate )`
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

const Contact = () => (
    <>
        <Row>
            <Column>
                <Heading.H2 center>Contact</Heading.H2>
            </Column>
        </Row>
        <Row>
            <Column xs={ 12 } sm={ 6 }>
                <Form>
                    <FormGroup>
                        <FormLabel htmlFor="name">Naam</FormLabel>
                        <Input type="text" id="name" name="name" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input type="text" id="email" name="email" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="phone">Telefoon</FormLabel>
                        <Input type="text" id="phone" name="phone" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="message">Bericht</FormLabel>
                        <TextArea id="message" name="message" />
                    </FormGroup>
                    <FormGroup>
                        reCAPTCHA
                    </FormGroup>
                    <FormGroup>
                        <Button.Primary type="submit">Verstuur</Button.Primary>
                    </FormGroup>
                </Form>
            </Column>
            <Column xs={ 12 } sm={ 6 }>
                <Row>
                    <Column xs={ 6 }>
                        <Paragraph>Corina Patings</Paragraph>
                        <Paragraph>Meijldoorn 6</Paragraph>
                        <Paragraph>5482 SG</Paragraph>
                        <Phone tel="+31 6 51778528" />
                        <Email email="info@corinapatings.nl" />
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
            </Column>
        </Row>
    </>
);

export default Contact;
