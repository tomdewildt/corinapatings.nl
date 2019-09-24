import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const BurgerButton = styled.button`
    display: block;
    padding: ${ ( { theme } ) => theme.burger.padding }rem;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;

    ${ ( { breakpoint, theme } ) => breakpoint && css`
        @media (min-width: ${ theme.breakpoints[ breakpoint ] }em) {
            display: none;
        }
    ` }
`;

BurgerButton.propTypes = {
    breakpoint: PropTypes.string.isRequired,
};

export default BurgerButton;
