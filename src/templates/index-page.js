import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import { Container, Headers, Image } from "../components";

const IndexPage = ( { data: { markdownRemark: { frontmatter } } } ) => (
    <Container>
        <Headers title={ frontmatter.title } />
        <Image source={ frontmatter.intro.image } alt="intro" />
    </Container>
);

IndexPage.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.shape( {
                title: PropTypes.string,
                intro: PropTypes.shape( {
                    title: PropTypes.string,
                    description: PropTypes.string,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                } ),
                testimonials: PropTypes.arrayOf( PropTypes.shape( {
                    text: PropTypes.string,
                    author: PropTypes.string,
                } ) ),
                cards: PropTypes.arrayOf( PropTypes.shape( {
                    title: PropTypes.string,
                    description: PropTypes.string,
                    link: PropTypes.string,
                    color: PropTypes.string,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                    size: PropTypes.number,
                } ) ),
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
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1280) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                testimonials {
                    text
                    author
                }
                cards {
                    title
                    description
                    link
                    color
                    image {
                        childImageSharp {
                            fluid(maxWidth: 630) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    size
                }
            }
        }
    }
`;

export default IndexPage;
