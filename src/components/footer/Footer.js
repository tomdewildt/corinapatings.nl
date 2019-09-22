import React from "react";
import styled from "styled-components";

import Text from "../typography/Text";

const Container = styled.footer`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: ${ ( { theme } ) => theme.footer.padding }rem;
    color: ${ ( { theme } ) => theme.color.grayDark };
    background-color: ${ ( { theme } ) => theme.color.grayLightest };
`;

const Footer = () => (
    <Container>
        <Text.Span bold>
            Copyright &copy; Corina Patings
            { " " }
            { new Date().getFullYear() }
        </Text.Span>
    </Container>
);

export default Footer;
