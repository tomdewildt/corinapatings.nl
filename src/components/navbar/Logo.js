import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const Item = styled( Link )`
    display: block;
`;

const Image = styled.img`
    display: block;
    height: ${ ( { theme } ) => theme.navbar.logo.height }rem;
    width: auto;
`;

const Logo = ( { to } ) => (
    <Item to={ to }>
        <Image src="https://placehold.it/180x60" alt="logo" />
    </Item>
);

Logo.propTypes = {
    to: PropTypes.string.isRequired,
};

export default Logo;
