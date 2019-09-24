import styled from "styled-components";
import PropTypes from "prop-types";

const Padding = styled.div`
    ${ ( props ) => props.theme.padding.types.map( ( t ) => props[ t ]
        && `padding-${ t }: ${ props.theme.padding.values[ props[ t ] ] }rem;` ) }
`;

Padding.propTypes = {
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
};

Padding.defaultProps = {
    top: null,
    bottom: null,
    left: null,
    right: null,
};

export default Padding;
