/* eslint-disable react/no-array-index-key */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import {
    Container,
    Headers,
    Jumbotron,
    CardContainer,
    Card,
    Contact,
    Footer,
} from "../components";

const ContentPage = ( { data: { markdownRemark: { frontmatter } } } ) => (
    <>
        <Headers />
        <Jumbotron
            title={ frontmatter.intro.title }
            image={ frontmatter.intro.image }
            description={ frontmatter.intro.description }
        />
        <Container>
            <CardContainer>
                { frontmatter.cards.map( ( card, i ) => (
                    <Card
                        key={ i }
                        title={ card.title }
                        description={ card.description }
                        color={ card.color }
                        image={ card.image }
                        size={ card.size }
                    />
                ) )}
            </CardContainer>
            <Contact />
        </Container>
        <Footer />
    </>
);

ContentPage.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.shape( {
                intro: PropTypes.shape( {
                    title: PropTypes.string,
                    description: PropTypes.string,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                } ),
                content: PropTypes.shape( {
                    left: PropTypes.string,
                    right: PropTypes.string,
                } ),
                cards: PropTypes.arrayOf( PropTypes.shape( {
                    title: PropTypes.string,
                    description: PropTypes.string,
                    link: PropTypes.string,
                    color: PropTypes.string,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                    size: PropTypes.string,
                } ) ),
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

export const query = graphql`
    query ContentPageQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "content-page"}}) {
            frontmatter {
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
                content {
                    left
                    right
                }
                cards {
                    title
                    description
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

export default ContentPage;
