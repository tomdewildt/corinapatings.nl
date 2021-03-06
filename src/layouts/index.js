import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { Navbar, Consent } from "../components";
import theme, { GlobalStyle } from "../themes";

const LayoutContainer = styled.div`
    height: calc(100vh - 3rem);
    overflow: auto;
    margin-top: 3rem;
`;

const Layout = ( { children } ) => (
    <ThemeProvider theme={ theme }>
        <LayoutContainer>
            <GlobalStyle />
            <Navbar />
            { children }
            <Consent />
        </LayoutContainer>
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
