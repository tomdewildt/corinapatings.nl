import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import theme, { GlobalStyle } from "../themes";
import { Navbar } from "../components";

const Container = styled.div`
    height: 100vh;
    padding-top: 3.5rem;
`;

const Layout = ( { children } ) => (
    <ThemeProvider theme={ theme }>
        <Container>
            <GlobalStyle />
            <Navbar />
            { children }
        </Container>
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
