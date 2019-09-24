import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const NavbarItem = styled( Link )`
    display: flex;
    align-items: center;
`;

const NavbarImage = styled.img`
    display: none;
    height: ${ ( { theme } ) => theme.navbar.logo.height }rem;
    width: auto;
    margin: ${ ( { theme } ) => theme.navbar.padding }rem 0;

    &:first-of-type { display: block; }
    &:last-of-type { display: none; }

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.navbar.logo.collapse }em) {
            &:first-of-type { display: none; }
            &:last-of-type { display: block; }
        }
    ` }
`;

const NavbarLogo = ( { to } ) => (
    <NavbarItem to={ to }>
        <NavbarImage src="/images/logo.png" alt="logo" />
        <NavbarImage src="/images/icon.png" alt="logo" />
    </NavbarItem>
);

NavbarLogo.propTypes = {
    to: PropTypes.string.isRequired,
};

export default NavbarLogo;
