import styled from "styled-components";
import PropTypes from "prop-types";

const Margin = styled.div`
    ${ ( props ) => props.theme.margin.types.map( ( t ) => props[ t ]
        && `margin-${ t }: ${ props.theme.margin.values[ props[ t ] ] }rem;` ) }
`;

Margin.propTypes = {
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
};

export default Margin;
