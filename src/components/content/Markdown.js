import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

const StyledMarkdown = styled( Markdown )`
    h1 {
        font-size: ${ ( { theme } ) => theme.content.h1.size }rem;
        font-weight: 700;
        line-height: ${ ( { theme } ) => theme.content.h1.lineHeight };
        margin-bottom: ${ ( { theme } ) => theme.content.h1.marginBottom }rem;
    }
    
    h2 {
        font-size: ${ ( { theme } ) => theme.content.h2.size }rem;
        font-weight: 700;
        line-height: ${ ( { theme } ) => theme.content.h2.lineHeight };
        margin-bottom: ${ ( { theme } ) => theme.content.h2.marginBottom }rem;
    }

    p {
        font-size: ${ ( { theme } ) => theme.content.text.size }rem;
        margin-bottom: ${ ( { theme } ) => theme.content.text.marginBottom }rem;
    }

    a {
        color: ${ ( { theme } ) => theme.color.secondary };
    }

    a:hover {
        color: ${ ( { theme } ) => theme.color.secondaryDark };
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
