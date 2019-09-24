import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import {
    Container,
    Headers,
    Row,
    Column,
    Heading,
    Text,
    Button,
} from "../components";

const NotFoundContainer = styled( Container )`
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const NotFound = () => (
    <NotFoundContainer>
        <Headers />
        <Row>
            <Column>
                <Heading.H2 center>404</Heading.H2>
                <Heading.H6 center>Pagina niet gevonden</Heading.H6>
                <Text.Paragraph center>
                        Sorry, de pagina die u zoekt is niet gevonden of bestaat niet.
                    <br />
                        Probeer de pagina te refreshen of klik op de terug knop.
                </Text.Paragraph>
            </Column>
        </Row>
        <Row>
            <Column justify="center">
                <Button.Primary type="button" onClick={ () => navigate( "/" ) }>Terug</Button.Primary>
            </Column>
        </Row>
    </NotFoundContainer>
);

export default NotFound;
