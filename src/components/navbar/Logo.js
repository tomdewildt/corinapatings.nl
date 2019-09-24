import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Logo from "../../assets/logo.svg";
import Icon from "../../assets/icon.svg";

const NavbarItem = styled( Link )`
    display: flex;
    align-items: center;
`;

const StyledLogo = styled( Logo )`
    display: block;
    height: ${ ( { theme } ) => theme.navbar.logo.height }rem;
    margin: ${ ( { theme } ) => theme.navbar.padding }rem 0;
    
    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.navbar.logo.collapse }em) {
            display: none;
        }
    ` }
`;

const StyledIcon = styled( Icon )`
    display: none;
    height: ${ ( { theme } ) => theme.navbar.logo.height }rem;
    margin: ${ ( { theme } ) => theme.navbar.padding }rem 0;

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.navbar.logo.collapse }em) {
            display: block;
        }
    ` }
`;

const NavbarLogo = ( { to } ) => (
    <NavbarItem to={ to }>
        <StyledLogo />
        <StyledIcon />
    </NavbarItem>
);

NavbarLogo.propTypes = {
    to: PropTypes.string.isRequired,
};

export default NavbarLogo;
