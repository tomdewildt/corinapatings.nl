import styled, { css } from "styled-components";

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.breakpoints.md }em) {
            padding: 0 ${ theme.container.padding }rem;
        }
    ` }
    
    ${ ( { theme } ) => Object.keys( theme.container.sizes ).map( ( key ) => css`
        @media only screen and (min-width: ${ theme.breakpoints[ key ] }em) {
            width: ${ theme.container.sizes[ key ] }rem;
        }
    ` ) }
`;

export default Container;
