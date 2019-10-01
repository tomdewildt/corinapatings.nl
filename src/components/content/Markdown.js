import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

const StyledMarkdown = styled( Markdown )`
    h1 {
        font-size: ${ ( { theme } ) => theme.typography.h3.size }rem;
        font-weight: 700;
        line-height: ${ ( { theme } ) => theme.typography.h3.lineHeight };
        margin-bottom: ${ ( { theme } ) => theme.typography.h3.marginBottom }rem;
    }
    
    h2 {
        font-size: ${ ( { theme } ) => theme.typography.h4.size }rem;
        font-weight: 700;
        line-height: ${ ( { theme } ) => theme.typography.h4.lineHeight };
        margin-bottom: ${ ( { theme } ) => theme.typography.h4.marginBottom }rem;
    }

    p {
        font-size: ${ ( { theme } ) => theme.typography.size }rem;
        margin-bottom: ${ ( { theme } ) => theme.typography.marginBottom }rem;
    }

    strong { font-weight: 700; }
    em { font-style: italic; }

    ul {
        list-style: disc;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
        padding-inline-start: 1.5rem;
    }

    ol {
        list-style-type: decimal;
        margin-block-start: 1rem;
        margin-block-end: 1rem;
        padding-inline-start: 1.5rem;
    }
`;

const MarkdownContent = ( { source, className } ) => (
    <StyledMarkdown source={ source } className={ className } />
);

MarkdownContent.propTypes = {
    source: PropTypes.string.isRequired,
    className: PropTypes.string,
};

MarkdownContent.defaultProps = {
    className: null,
};

export default MarkdownContent;
