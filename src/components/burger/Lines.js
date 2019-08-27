import styled, { css } from "styled-components";

const Lines = styled.span`
    display: block;
    top: 50%;
    margin-top: ${ ( { theme } ) => theme.burger.line.height / -2 }rem;
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &, &::before, &::after {
        position: absolute;
        width: ${ ( { theme } ) => theme.burger.line.width }rem;
        height: ${ ( { theme } ) => theme.burger.line.height }rem;
        background-color: ${ ( { theme } ) => theme.color.grayDark };
        border-radius: ${ ( { theme } ) => theme.burger.line.radius }rem;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }
    &::before, &::after { content: ""; display: block; }
    &::before {
        top: ${ ( { theme } ) => ( theme.burger.line.spacing + theme.burger.line.height ) * -1 }rem;
        transition: top 0.075s 0.12s ease, opacity 0.075s ease;
    }
    &::after {
        bottom: ${ ( { theme } ) => ( theme.burger.line.spacing + theme.burger.line.height ) * -1 }rem;
        transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    ${ ( { isActive } ) => isActive && css`
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::before {
            top: 0;
            opacity: 0;
            transition: top 0.075s ease, opacity 0.075s 0.12s ease;
        }
        &::after {
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
    ` }
`;

export default Lines;
