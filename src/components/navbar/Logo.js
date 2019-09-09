import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Item = styled( Link )`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    display: none;
    height: ${ ( { theme } ) => theme.navbar.logo.height }rem;
    width: auto;
    margin: ${ ( { theme } ) => theme.navbar.padding }rem 0;

    &:first-of-type { display: block; }
    &:last-of-type { display: none; }

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.navbar.breakpoints.sm }em) {
            margin: ${ theme.navbar.padding }rem;
        }
    ` }

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.navbar.logo.collapse }em) {
            &:first-of-type { display: none; }
            &:last-of-type { display: block; }
        }
    ` }
`;

const Logo = ( { to } ) => (
    <Item to={ to }>
        <Image src="/images/logo.png" alt="logo" />
        <Image src="/images/icon.png" alt="logo" />
    </Item>
);

Logo.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Logo;
