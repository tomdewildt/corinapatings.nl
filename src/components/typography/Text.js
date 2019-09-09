import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
    center: PropTypes.bool,
    italic: PropTypes.bool,
    bold: PropTypes.bool,
};
const defaultProps = {
    center: false,
    italic: false,
    bold: false,
};

const Paragraph = styled.p`
    font-size: ${ ( { theme } ) => theme.typography.size }rem;
    font-style: ${ ( { italic } ) => ( italic ? "italic" : "normal" ) };
    font-weight: ${ ( { bold } ) => ( bold ? "700" : "400" ) };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;
`;
Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

const Span = styled.span`
    font-size: ${ ( { theme } ) => theme.typography.size }rem;
    font-style: ${ ( { italic } ) => ( italic ? "italic" : "normal" ) };
    font-weight: ${ ( { bold } ) => ( bold ? "700" : "400" ) };
    text-align: ${ ( { center } ) => ( center ? "center" : "left" ) };
`;
Span.propTypes = propTypes;
Span.defaultProps = defaultProps;

export default {
    Paragraph,
    Span,
};
