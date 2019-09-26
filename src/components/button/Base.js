import { css } from "styled-components";

const Base = css`
    display: inline-block;
    margin: ${ ( { theme } ) => `0 ${ theme.button.margin }rem 0 0` };
    padding: ${ ( { theme } ) => `${ theme.button.padding }rem ${ theme.button.padding * 2.5 }rem` };
    border-radius: ${ ( { theme } ) => theme.button.radius }rem;
    font: inherit;
    font-weight: 700;
    font-size: ${ ( { theme } ) => theme.button.size }rem;
    text-decoration: none;
    text-transform: none;
    color: ${ ( { theme } ) => theme.color.white };
    cursor: pointer;
    overflow: visible;

    &:last-of-type {
        margin-right: 0;
    }
`;

export default Base;
