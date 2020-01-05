/* eslint-disable react/no-array-index-key */
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import {
    Container,
    Headers,
    Jumbotron,
    Row,
    Column,
    Heading,
    MarkdownContent,
    TestimonialContainer,
    Testimonial,
    CardContainer,
    Card,
    Contact,
    Footer,
} from "../components";

const IndexPage = ( { data: { markdownRemark: { frontmatter } } } ) => (
    <>
        <Headers />
        <Jumbotron
            offset={ frontmatter.intro.offset }
            image={ frontmatter.intro.image }
        />
        <Container>
            { frontmatter.notice && (
                <>
                    { frontmatter.notice.title && (
                        <Row>
                            <Column>
                                <Heading.H3 center>Nieuws</Heading.H3>
                            </Column>
                        </Row>
                    ) }
                    { frontmatter.notice.message && (
                        <Row>
                            <Column>
                                <MarkdownContent source={ frontmatter.notice.message } />
                            </Column>
                        </Row>
                    ) }
                </>
            ) }
            <TestimonialContainer>
                { frontmatter.testimonials.map( ( testimonial, i ) => (
                    <Testimonial
                        key={ i }
                        text={ testimonial.text }
                        author={ testimonial.author }
                    />
                ) )}
            </TestimonialContainer>
            <CardContainer>
                { frontmatter.cards.map( ( card, i ) => (
                    <Card
                        key={ i }
                        title={ card.title }
                        description={ card.description }
                        to={ card.link }
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

IndexPage.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.shape( {
                intro: PropTypes.shape( {
                    offset: PropTypes.number,
                    image: PropTypes.oneOfType( [ PropTypes.shape( {} ), PropTypes.string ] ),
                } ),
                notice: PropTypes.shape( {
                    title: PropTypes.string,
                    message: PropTypes.string,
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
                    size: PropTypes.string,
                } ) ),
            } ).isRequired,
        } ).isRequired,
    } ).isRequired,
};

export const query = graphql`
    query HomePageQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
            frontmatter {
                intro {
                    offset
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1920) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                notice {
                    title
                    message
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
