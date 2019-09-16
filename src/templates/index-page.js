import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import {
    Container,
    Headers,
} from "../components";

const IndexPage = ( { data: { markdownRemark: { frontmatter } } } ) => (
    <Container>
        <Headers title={ frontmatter.title } />
        <img src={ frontmatter.intro.image } alt="intro" />
    </Container>
);

IndexPage.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.shape( {
                title: PropTypes.string,
                intro: PropTypes.shape( {} ),
                testimonials: PropTypes.arrayOf( PropTypes.shape( {} ) ),
                grid: PropTypes.arrayOf( PropTypes.shape( {} ) ),
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

export const query = graphql`
    query HomePageQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
                title
                intro {
                    title
                    description
                    image
                }
                testimonials {
                    text
                    author
                }
                grid {
                    title
                    description
                    link
                    color
                    image
                    size
                }
            }
        }
    }
`;

export default IndexPage;
