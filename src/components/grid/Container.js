import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    height: 100%;
    margin-right: auto;
    margin-left: auto;

    ${ ( { fluid, theme } ) => !fluid && css`
        padding-right: ${ theme.container.padding }rem;
        padding-left: ${ theme.container.padding }rem;
    ` }
    
    ${ ( { theme } ) => Object.keys( theme.container.breakpoints ).map( ( key ) => css`
        @media only screen and (min-width: ${ theme.breakpoints[ key ] }em) {
            width: ${ theme.container.breakpoints[ key ] }rem;
        }
    ` ) }
`;

Container.propTypes = {
    fluid: PropTypes.bool,
};

Container.defaultProps = {
    fluid: false,
};

export default Container;
