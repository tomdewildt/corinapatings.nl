import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const MIN_WIDTH = 8.33333333;
const MAX_WIDTH = 100;

const map = ( value, min, max ) => ( ( value - min ) * ( MAX_WIDTH - MIN_WIDTH ) ) / ( max - min ) + MIN_WIDTH;

const Column = styled.div`
    flex: 0 0 auto;
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    box-sizing: border-box;

    padding-right: ${ ( { theme } ) => theme.grid.gutter / 2 }rem;
    padding-left: ${ ( { theme } ) => theme.grid.gutter / 2 }rem;

    ${ ( { reverse } ) => reverse && "flex-direction: column-reverse" };
    ${ ( { justify } ) => justify && `display: flex; justify-content: ${ justify };` }
    ${ ( { align } ) => align && `display: flex; align-items: ${ align };` }

    ${ ( props ) => Object.keys( props.theme.breakpoints ).map( ( key ) => props[ key ] !== null && css`
        @media only screen and (min-width: ${ props.theme.breakpoints[ key ] }em) {
            flex-basis: ${ map( props[ key ], 1, props.theme.grid.columns ) }%;
            max-width: ${ map( props[ key ], 1, props.theme.grid.columns ) }%;
        }
    ` ) }
`;

Column.propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    reverse: PropTypes.bool,
    justify: PropTypes.string,
    align: PropTypes.string,
};

Column.defaultProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    reverse: false,
    justify: null,
    align: null,
};
export default Column;
