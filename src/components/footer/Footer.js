import React from "react";
import styled from "styled-components";

import Text from "../typography/Text";

const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: ${ ( { theme } ) => theme.footer.padding }rem;
    color: ${ ( { theme } ) => theme.color.grayDark };
    background-color: ${ ( { theme } ) => theme.color.grayLightest };
`;

const Footer = () => (
    <FooterContainer>
        <Text.Span>
            Copyright &copy; Corina Patings
            { " " }
            { new Date().getFullYear() }
        </Text.Span>
    </FooterContainer>
);

export default Footer;
