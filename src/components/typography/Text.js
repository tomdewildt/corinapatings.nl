import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
    italic: PropTypes.bool,
    bold: PropTypes.bool,
};
const defaultProps = {
    italic: false,
    bold: false,
};

const Paragraph = styled.p`
    font-size: ${ ( { theme } ) => theme.typography.size }rem;
    font-style: ${ ( { italic } ) => ( italic ? "italic" : "normal" ) };
    font-weight: ${ ( { bold } ) => ( bold ? "700" : "400" ) };
    margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;
`;
Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

const Span = styled.span`
    font-size: ${ ( { theme } ) => theme.typography.size }rem;
    font-style: ${ ( { italic } ) => ( italic ? "italic" : "normal" ) };
    font-weight: ${ ( { bold } ) => ( bold ? "700" : "400" ) };
`;
Span.propTypes = propTypes;
Span.defaultProps = defaultProps;

export default {
    Paragraph,
    Span,
};
