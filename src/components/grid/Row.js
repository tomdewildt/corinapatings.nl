import styled from "styled-components";
import PropTypes from "prop-types";

const Row = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-direction: ${ ( { reverse } ) => ( reverse ? "row-reverse" : "row" ) };
    flex-wrap: wrap;
    box-sizing: border-box;

    margin-right: ${ ( { theme } ) => ( theme.grid.gutter / 2 ) * -1 }rem;
    margin-left: ${ ( { theme } ) => ( theme.grid.gutter / 2 ) * -1 }rem;
`;

Row.propTypes = {
    reverse: PropTypes.bool,
};

Row.defaultProps = {
    reverse: false,
};

export default Row;
