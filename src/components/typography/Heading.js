import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
    center: PropTypes.bool,
};
const defaultProps = {
    center: false,
};

const H1 = styled.h1`
    font-family: ${ ( { theme } ) => theme.typography.h1.font };
    font-size: ${ ( { theme } ) => theme.typography.h1.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h1.lineHeight };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.h1.marginBottom }rem;
`;
H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

const H2 = styled.h2`
    font-family: ${ ( { theme } ) => theme.typography.h2.font };
    font-size: ${ ( { theme } ) => theme.typography.h2.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h2.lineHeight };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.h2.marginBottom }rem;
`;
H2.propTypes = propTypes;
H2.defaultProps = defaultProps;

const H3 = styled.h3`
    font-family: ${ ( { theme } ) => theme.typography.h3.font };
    font-size: ${ ( { theme } ) => theme.typography.h3.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h3.lineHeight };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.h3.marginBottom }rem;
`;
H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

const H4 = styled.h4`
    font-family: ${ ( { theme } ) => theme.typography.h4.font };
    font-size: ${ ( { theme } ) => theme.typography.h4.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h4.lineHeight };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.h4.marginBottom }rem;
`;
H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

const H5 = styled.h5`
    font-family: ${ ( { theme } ) => theme.typography.h5.font };
    font-size: ${ ( { theme } ) => theme.typography.h5.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h5.lineHeight };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.h5.marginBottom }rem;
`;
H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

const H6 = styled.h6`
    font-family: ${ ( { theme } ) => theme.typography.h6.font };
    font-size: ${ ( { theme } ) => theme.typography.h6.size }rem;
    font-weight: 700;
    line-height: ${ ( { theme } ) => theme.typography.h6.lineHeight };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.h6.marginBottom }rem;
`;
H6.propTypes = propTypes;
H6.defaultProps = defaultProps;

export default {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
};
